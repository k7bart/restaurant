import { useEffect, useRef, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import Icon from "../icon/Icon";
import Row from "../row/Row";
import Text from "../text/Text";
import styles from "./Dropdown.module.scss";

type DropdownOption = {
    id: string | number;
    text: string;
};

type Props = {
    label?: string;
    onSelect?: (option: DropdownOption) => void;
    options: DropdownOption[];
    placeholder?: string;
};

const Dropdown = ({
    label,
    onSelect,
    options,
    placeholder = "Select an option",
}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<DropdownOption | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: DropdownOption) => {
        setSelected(option);
        setIsOpen(false);
        onSelect?.(option);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
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
                    {options.map((option) => (
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
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
