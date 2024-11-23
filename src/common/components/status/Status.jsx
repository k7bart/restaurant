import classNames from "classnames";
import PropTypes from "prop-types";
import Text from "../../../user/components/Text/Text";
import { capitalize } from "../../../utils/stringUtils";
import styles from "./Status.module.scss";

const Status = ({ additionalStyles, status }) => {
    return (
        <Text
            className={classNames(
                additionalStyles,
                styles.status,
                styles[status]
            )}
            size="medium"
        >
            {capitalize(status)}
        </Text>
    );
};

Status.propTypes = {
    additionalStyles: PropTypes.string,
    status: PropTypes.string.isRequired,
};

export default Status;
