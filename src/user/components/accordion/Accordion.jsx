import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
            <header
                onClick={handleOpen}
                className={classNames({ [styles.open]: open })}
            >
                <h4>{title}</h4>
                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </header>

            <div
                className={classNames(
                    styles.content,
                    { [styles.open]: open, [styles.hidden]: !open },
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
            className: PropTypes.string,
        })
    ).isRequired,
};

export default Accordion;
