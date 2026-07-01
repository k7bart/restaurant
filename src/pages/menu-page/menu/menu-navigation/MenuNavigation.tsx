import classNames from "classnames";
import { capitalize } from "../../../../utils/stringUtils";
import { menu } from "../../../../state";
import ContentSectionNav from "../../../../components/page-sructure/content-section/content-section-nav/ContentSectionNav";
import styles from "../../../../components/links/custom-nav-link/CustomNavLink.module.scss";
import type { Category } from "@k7bart/restaurant-shared-types";

type MenuLinkProps = {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
};

const MenuLink = ({ children, isActive, onClick }: MenuLinkProps) => (
    <a
        className={classNames(styles.link, styles.grey, {
            [styles.active]: isActive,
        })}
        onClick={onClick}
    >
        {children}
    </a>
);

type MenuNavigationProps = {
    activeCategory: Category["name"];
    handleNavigation: (categoryName: Category["name"]) => void;
};

const MenuNavigation = ({
    activeCategory,
    handleNavigation,
}: MenuNavigationProps) => (
    <ContentSectionNav justifyContent="contentEvenly">
        {menu.map((category) => (
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
