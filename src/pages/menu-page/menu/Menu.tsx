import { useState, useTransition, useRef, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";
import { useActiveCategory } from "../../../hooks/useActiveCategory";
import { menuService } from "../../../services/menu-service";

import CategorySection from "./category/Category";
import ContentSection from "../../../components/page-sructure/content-section/ContentSection";
import Loader from "../../../components/loader/Loader";
import MenuNavigation from "./menu-navigation/MenuNavigation";
import Pill from "../../../components/pill/Pill";

import styles from "./Menu.module.scss";

import type { Category as MenuCategory } from "@k7bart/restaurant-shared-types";

type FilterType = "vegan" | null;

const getVeganOptions = (menu: MenuCategory[]) => {
    return menu
        .map((category) => ({
            ...category,
            dishes: category.dishes.filter((p) => p.isVegan),
        }))
        .filter((c) => c.dishes.length);
};

const Menu = () => {
    const [menu, setMenu] = useState<MenuCategory[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPending, startTransition] = useTransition();
    const [filteredMenu, setFilteredMenu] = useState<MenuCategory[]>([]);
    const [activeFilter, setActiveFilter] = useState<FilterType>(null);
    const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [activeCategory, setActiveCategory] = useActiveCategory(
        isPending || isLoading ? [] : filteredMenu,
        categoryRefs,
    );

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const { data: menu } = await menuService.getMenu();
                setMenu(menu);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMenu();
    }, []);

    useEffect(() => {
        if (activeFilter === "vegan") {
            setFilteredMenu(getVeganOptions(menu));
            return;
        }

        setFilteredMenu(menu);
    }, [activeFilter, menu]);

    const applyFilter = (filter: FilterType) => {
        startTransition(() => {
            setActiveFilter(filter);
            setFilteredMenu(getVeganOptions(menu));
        });
    };

    const resetFilter = () => {
        startTransition(() => {
            setActiveFilter(null);
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
        <ContentSection
            isLoading={isLoading}
            navigation={
                <MenuNavigation
                    categories={filteredMenu}
                    activeCategory={activeCategory}
                    handleNavigation={handleNavigation}
                />
            }
        >
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
