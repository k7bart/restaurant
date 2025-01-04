import PropTypes from "prop-types";

import Button from "../../../common/components/buttons/Button/Button";
import Text from "../Text/Text";

import styles from "./OptionsButtons.module.scss";

const OptionsButtons = ({ label, onClick, options, selectedOption }) => (
    <div className={styles.container}>
        {label && (
            <Text className={styles.text} size="medium">
                {label}
            </Text>
        )}

        <div className={styles.optionsButtons}>
            {options.map(({ option, label }) => (
                <Button
                    key={option}
                    isActive={selectedOption === option}
                    onClick={() => selectedOption !== option && onClick(option)}
                >
                    {label}
                </Button>
            ))}
        </div>
    </div>
);

OptionsButtons.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            option: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedOption: PropTypes.string.isRequired,
};

export default OptionsButtons;
