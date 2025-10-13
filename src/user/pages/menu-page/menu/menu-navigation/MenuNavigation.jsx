import PropTypes from "prop-types";
import { capitalize } from "../../../../../utils/stringUtils";
import { menu } from "../../../../../state";
import classNames from "classnames";
import styles from "../../../../components/links/NavLinkComponent/NavLinkComponent.module.scss";
import ContentSectionNav from "../../../../components/page-sructure/ContentSection/ContentSectionNav/ContentSectionNav";

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

const MenuNavigation = ({ activeCategory, handleNavigation }) => {
    return (
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
};

export default MenuNavigation;

MenuNavigation.propTypes = {
    activeCategory: PropTypes.string,
    handleNavigation: PropTypes.func,
};
