import PropTypes from "prop-types";

import Button from "../../../common/components/buttons/Button/Button";
import Text from "../Text/Text";

import styles from "./OptionsButtons.module.scss";

const OptionsButtons = ({ label, onChange, options, selectedOption }) => (
    <div>
        {label && <Text className={styles.text}>{label}</Text>}

        <div className={styles.container}>
            {options.map(({ option, label }) => (
                <Button
                    key={option}
                    isActive={selectedOption === option}
                    onClick={() =>
                        selectedOption !== option && onChange(option)
                    }
                >
                    {label}
                </Button>
            ))}
        </div>
    </div>
);

OptionsButtons.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            option: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedOption: PropTypes.string.isRequired,
};

export default OptionsButtons;
