import { type ReactNode } from "react";
import styles from "./Slide.module.scss";

const Slide = ({ slideContent }: { slideContent: ReactNode }) => (
    <div className={styles.slide}>{slideContent}</div>
);

export default Slide;
