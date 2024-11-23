import classNames from "classnames";
import styles from "./ContentSectionNav.module.scss";
import PropTypes from "prop-types";

const ContentSectionNav = ({ children, justifyContent = undefined }) => {
    return (
        <nav className={classNames(styles.nav, styles[justifyContent])}>
            {children}
        </nav>
    );
};

ContentSectionNav.propTypes = {
    children: PropTypes.node.isRequired,
    justifyContent: PropTypes.oneOf(["contentEvenly", "contentRight"]),
};

export default ContentSectionNav;
