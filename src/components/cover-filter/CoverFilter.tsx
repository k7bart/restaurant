import cn from "classnames";
import styles from "./CoverFilter.module.scss";

const CoverFilter = ({ additionalStyles }: { additionalStyles?: string }) => (
    <div className={cn(additionalStyles, styles.filter)}></div>
);

export default CoverFilter;
