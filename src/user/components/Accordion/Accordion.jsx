import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./Accordion.module.scss";

const Accordion = ({ items }) => {
    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    className={item.className}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

const AccordionItem = ({ title, children, className = "" }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.item}>
            <header onClick={handleOpen} className={open ? styles.open : ""}>
                <h4>{title}</h4>
                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </header>

            <div
                className={`${styles.content} ${
                    open ? styles.open : styles.hidden
                } ${className}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;
