import Button from "../buttons/button/Button";
import Text from "../text/Text";
import styles from "./OptionsButtons.module.scss";
import { type Option } from "../../types/Option";

type Props = {
    label?: string;
    onClick: (option: string) => void;
    options: Option[];
    selectedOption: string;
};

const OptionsButtons = ({ label, onClick, options, selectedOption }: Props) => (
    <div className={styles.container}>
        {label && (
            <Text className={styles.text} size="medium">
                {label}
            </Text>
        )}

        <div className={styles.optionsButtons}>
            {options.map(({ option, label: optionLabel }) => (
                <Button
                    key={option}
                    isActive={selectedOption === option}
                    onClick={() => selectedOption !== option && onClick(option)}
                >
                    {optionLabel}
                </Button>
            ))}
        </div>
    </div>
);

export default OptionsButtons;
