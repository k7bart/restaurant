import { capitalize } from "../../../../../utils/stringUtils";
import { menu } from "../../../../../state";
import classNames from "classnames";
import styles from "../../../../components/links/NavLinkComponent/NavLinkComponent.module.scss";
import ContentSectionNav from "../../../../components/page-sructure/ContentSection/ContentSectionNav/ContentSectionNav";

const handleClick = (id) => () => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

const MenuLink = ({ children, isActive, onClick }) => {
    return (
        <a
            className={classNames(styles.link, styles.grey, {
                [styles.active]: isActive,
            })}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

const MenuNavigation = ({ activeCategory }) => {
    return (
        <ContentSectionNav justifyContent="contentEvenly">
            {menu.map((category) => (
                <MenuLink
                    key={category.name}
                    isActive={activeCategory === category.name}
                    onClick={handleClick(category.name)}
                >
                    {capitalize(category.name)}
                </MenuLink>
            ))}
        </ContentSectionNav>
    );
};

export default MenuNavigation;
