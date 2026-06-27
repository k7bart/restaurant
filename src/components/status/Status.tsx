import cn from "classnames";
import Text from "../text/Text";
import { capitalize } from "../../utils/stringUtils";
import styles from "./Status.module.scss";

const Status = ({
    additionalStyles,
    status,
}: {
    additionalStyles?: string;
    status: string;
}) => (
    <Text
        className={cn(additionalStyles, styles.status, styles[status])}
        size="medium"
    >
        {capitalize(status)}
    </Text>
);

export default Status;
