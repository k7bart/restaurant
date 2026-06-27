import cn from "classnames";
import styles from "./ContentSectionNav.module.scss";
import PropTypes from "prop-types";

type Props = {
    children: React.ReactNode;
    justifyContent?: "contentEvenly" | "contentRight";
};

const ContentSectionNav = ({ children, justifyContent }: Props) => {
    return (
        <nav
            className={cn(styles.nav, justifyContent && styles[justifyContent])}
        >
            {children}
        </nav>
    );
};

ContentSectionNav.propTypes = {
    children: PropTypes.node.isRequired,
    justifyContent: PropTypes.oneOf(["contentEvenly", "contentRight"]),
};

export default ContentSectionNav;
