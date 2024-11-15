import { IoClose } from "react-icons/io5";
import classNames from "classnames";
import styles from "./CloseButton.module.scss";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";

const CloseButton = ({ isInCorner = false, onClick }) => {
    return (
        <ButtonWithIcon
            className={classNames({ [styles.inCorner]: isInCorner })}
            icon={<IoClose />}
            onClick={onClick}
        />
    );
};

export default CloseButton;
