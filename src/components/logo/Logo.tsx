import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = ({ additionalStyles }: { additionalStyles?: string }) => (
    <Link
        className={cn(styles.logo, additionalStyles, "logo")}
        data-testid="logo"
        to="/"
    >
        b.art
    </Link>
);

export default Logo;
