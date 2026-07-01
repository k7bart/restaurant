import Button from "../buttons/button/Button";
import Text from "../text/Text";
import styles from "./OptionsButtons.module.scss";
import { type Option } from "@k7bart/restaurant-shared-types";

type Props = {
    label?: string;
    onClick: (value: Option["value"]) => void;
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
            {options.map(({ value, label: optionLabel }) => (
                <Button
                    key={value}
                    isActive={selectedOption === value}
                    onClick={() => selectedOption !== value && onClick(value)}
                >
                    {optionLabel}
                </Button>
            ))}
        </div>
    </div>
);

export default OptionsButtons;
