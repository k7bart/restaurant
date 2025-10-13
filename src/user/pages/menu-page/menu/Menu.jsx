import { useState, useEffect, useTransition, useRef } from "react";
import { FaLeaf } from "react-icons/fa";
import { menu } from "../../../../state";
import debounce from "../../../../utils/debounce";
import Category from "./Category/Category";
import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection";
import Loader from "../../../components/loader/Loader";
import MenuNavigation from "./menu-navigation/MenuNavigation";
import Pill from "../../../components/pill/Pill";
import styles from "./Menu.module.scss";

const getVeganOptions = () => {
    return menu
        .map((category) => ({
            ...category,
            products: category.products?.filter((p) => p.isVegan),
        }))
        .filter((c) => c.products?.length);
};

const Menu = () => {
    const [isPending, startTransition] = useTransition();
    const [filteredMenu, setFilteredMenu] = useState(menu);
    const [activeCategory, setActiveCategory] = useState(filteredMenu[0].name);
    const [activeFilter, setActiveFilter] = useState(null);
    const categoryRefs = useRef({});

    const applyFilter = (filter) => {
        setActiveFilter(filter);
        startTransition(() => {
            const veganMenu = getVeganOptions();

            // Heavy render
            // const repeatedMenu = [];
            // for (let i = 0; i < 500; i++) {
            //     veganMenu.forEach((category) => {
            //         repeatedMenu.push({
            //             ...category,
            //             name: `${category.name} ${i}`,
            //         });
            //     });
            // }

            setFilteredMenu(veganMenu);
        });
    };

    const resetFilter = () => {
        setActiveFilter(null);
        startTransition(() => {
            setFilteredMenu(menu);
        });
    };

    const handleFilter = (filter) => {
        filter === activeFilter ? resetFilter() : applyFilter(filter);
    };

    const handleScroll = () => {
        const navbar = document.querySelector("nav");
        const categories = document.querySelectorAll(".category");

        categories.forEach((category) => {
            const rect = category.getBoundingClientRect();
            if (
                rect.bottom > navbar.offsetHeight + 20 &&
                rect.top < navbar.offsetHeight + 20
            ) {
                setActiveCategory(category.id);
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
            <MenuNavigation
                activeCategory={activeCategory}
                handleNavigation={(c) =>
                    categoryRefs.current[c].scrollIntoView()
                }
            />

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
                    <Category
                        key={category.name}
                        category={category}
                        ref={(el) => (categoryRefs.current[category.name] = el)}
                    />
                ))
            )}
        </ContentSection>
    );
};

export default Menu;
