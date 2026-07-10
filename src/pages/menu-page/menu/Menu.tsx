import { useState, useTransition, useRef } from "react";
import { FaLeaf } from "react-icons/fa";
import { menu } from "../../../state";
import { useActiveCategory } from "../../../hooks/useActiveCategory";

import CategorySection from "./Category/Category";
import ContentSection from "../../../components/page-sructure/content-section/ContentSection";
import Loader from "../../../components/loader/Loader";
import MenuNavigation from "./menu-navigation/MenuNavigation";
import Pill from "../../../components/pill/Pill";

import styles from "./Menu.module.scss";

import type { Category as MenuCategory } from "@k7bart/restaurant-shared-types";

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
    const [activeFilter, setActiveFilter] = useState<FilterType>(null);
    const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [activeCategory, setActiveCategory] = useActiveCategory(
        isPending ? [] : filteredMenu,
        categoryRefs,
    );

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
        if (filter === activeFilter) {
            resetFilter();
            return;
        }
        applyFilter(filter);
    };

    const handleNavigation = (categoryName: MenuCategory["name"]) => {
        setActiveCategory(categoryName);
        categoryRefs.current[categoryName]?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <ContentSection className={styles.section}>
            <MenuNavigation
                categories={filteredMenu}
                activeCategory={activeCategory}
                handleNavigation={handleNavigation}
            />

            <div className={styles.filters}>
                <Pill
                    active={activeFilter === "vegan"}
                    color="green"
                    onClick={() => handleFilter("vegan")}
                >
                    Vegan
                    <FaLeaf />
                </Pill>
            </div>

            {isPending ? (
                <Loader />
            ) : (
                filteredMenu.map((category) => (
                    <CategorySection
                        key={category.name}
                        category={category}
                        ref={(el) => {
                            categoryRefs.current[category.name] = el;
                        }}
                    />
                ))
            )}
        </ContentSection>
    );
};

export default Menu;
