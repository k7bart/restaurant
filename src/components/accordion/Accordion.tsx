import { type ReactNode, useState } from "react";
import cn from "classnames";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import styles from "./Accordion.module.scss";

type Item = {
    title: string;
    content: ReactNode;
    className?: string;
};

const Accordion = ({ items }: { items: Item[] }) => (
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

type Props = {
    title: string;
    children: ReactNode;
    className?: string;
};

const AccordionItem = ({ title, children, className = "" }: Props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.item}>
            <header
                onClick={handleOpen}
                className={cn({ [styles.open]: open })}
            >
                <h4>{title}</h4>
                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </header>

            <div
                className={cn(
                    styles.content,
                    { [styles.open]: open, [styles.hidden]: !open },
                    className,
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;
