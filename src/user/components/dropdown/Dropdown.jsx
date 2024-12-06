import { useEffect, useRef, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import PropTypes from "prop-types";

import Icon from "../Icon/Icon";
import Row from "../../../common/components/Row/Row";
import Text from "../Text/Text";

import styles from "./Dropdown.module.scss";

const Dropdown = ({ label, onSelect, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className={styles.dropdown}>
            <Text className={styles.text} size="medium">
                {label}
            </Text>

            <button
                className={styles.dropdownButton}
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
            >
                {selected ? selected.text : placeholder}
            </button>

            {isOpen && (
                <div className={styles.dropdownOptions}>
                    {options.map((option) => {
                        return (
                            <Row
                                key={option.id}
                                onClick={() => handleOptionClick(option)}
                                additionalStyles={styles.dropdownOption}
                            >
                                {selected?.id === option.id && (
                                    <Icon additionalStyles={styles.icon}>
                                        <IoCheckmark />
                                    </Icon>
                                )}

                                <Text size="medium">{option.text}</Text>
                            </Row>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    label: PropTypes.string,
    onSelect: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.any, text: PropTypes.string })
    ).isRequired,
    placeholder: PropTypes.string,
};

Dropdown.defaultProps = {
    placeholder: "Select an option",
};

export default Dropdown;
