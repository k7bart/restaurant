import classNames from "classnames";
import { capitalize } from "../../../../utils/stringUtils";
import ContentSectionNav from "../../../../components/page-sructure/content-section/content-section-nav/ContentSectionNav";
import styles from "../../../../components/links/custom-link/CustomLink.module.scss";
import type { Category } from "@k7bart/restaurant-shared-types";

type MenuLinkProps = {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
};

const MenuLink = ({ children, isActive, onClick }: MenuLinkProps) => (
    <a
        className={classNames(
            styles.link,
            isActive ? styles.wisteria : styles.grey,
        )}
        onClick={onClick}
    >
        {children}
    </a>
);

type MenuNavigationProps = {
    categories: Category[];
    activeCategory: Category["name"];
    handleNavigation: (categoryName: Category["name"]) => void;
};

const MenuNavigation = ({
    categories,
    activeCategory,
    handleNavigation,
}: MenuNavigationProps) => (
    <ContentSectionNav justifyContent="contentEvenly">
        {categories.map((category) => (
            <MenuLink
                key={category.name}
                isActive={activeCategory === category.name}
                onClick={() => handleNavigation(category.name)}
            >
                {capitalize(category.name)}
            </MenuLink>
        ))}
    </ContentSectionNav>
);

export default MenuNavigation;
