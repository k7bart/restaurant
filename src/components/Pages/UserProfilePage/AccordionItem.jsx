import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="item">
            <header onClick={handleOpen} className={open ? "open" : ""}>
                <h4>{title}</h4>
                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </header>

            <div className={"content " + (open ? "open" : "hidden")}>
                {children}
            </div>
        </div>
    );
};

export default AccordionItem;
