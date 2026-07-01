import { type ReactNode } from "react";
import styles from "./Notice.module.scss";

const Notice = ({ children }: { children: ReactNode }) => (
    <div className={styles.notice}>{children}</div>
);

export default Notice;
