import { useState, useEffect, useTransition } from "react";
import { FaLeaf } from "react-icons/fa";
import { menu } from "../../../state";
import debounce from "../../../utils/debounce";

import Category from "./Category/Category";
import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection";
import Loader from "../../../components/loader/Loader";
import MenuNavigation from "./menu-navigation/MenuNavigation";
import Pill from "../../../components/pill/Pill";

import styles from "./Menu.module.scss";

import type { Category as ICategory } from "@k7bart/restaurant-shared-types";

type FilterType = "vegan" | null;

const getVeganOptions = () => {
    return menu
        .map((category) => ({
            ...category,
            dishes: category.dishes.filter((p) => p.isVegan),
        }))
        .filter((c) => c.dishes.length);
};

const Menu = () => {
    const [isPending, startTransition] = useTransition();
    const [filteredMenu, setFilteredMenu] = useState(menu);
    const [activeCategory, setActiveCategory] = useState(filteredMenu[0].name);
    const [activeFilter, setActiveFilter] = useState<FilterType>(null);

    const applyFilter = (filter: FilterType) => {
        setActiveFilter(filter);
        startTransition(() => {
            const veganMenu = getVeganOptions();

            setFilteredMenu(veganMenu);
        });
    };

    const resetFilter = () => {
        setActiveFilter(null);
        startTransition(() => {
            setFilteredMenu(menu);
        });
    };

    const handleFilter = (filter: FilterType) => {
        filter === activeFilter ? resetFilter() : applyFilter(filter);
    };

    const handleScroll = () => {
        const navbar = document.querySelector("nav");
        const categories = document.querySelectorAll(".category");

        categories.forEach((category) => {
            const rect = category.getBoundingClientRect();
            if (
                rect.bottom > (navbar?.offsetHeight ?? 0) + 20 &&
                rect.top < (navbar?.offsetHeight ?? 0) + 20
            ) {
                setActiveCategory(category.id as ICategory["name"]);
            }
        });
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    useEffect(() => {
        window.addEventListener("scroll", debouncedHandleScroll);
        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
        };
    });

    return (
        <ContentSection className={styles.section}>
            <MenuNavigation activeCategory={activeCategory} />

            <Pill
                active={activeFilter === "vegan"}
                color="green"
                onClick={() => handleFilter("vegan")}
            >
                Vegan
                <FaLeaf />
            </Pill>

            {isPending ? (
                <Loader />
            ) : (
                filteredMenu.map((category) => (
                    <Category key={category.name} category={category} />
                ))
            )}
        </ContentSection>
    );
};

export default Menu;
