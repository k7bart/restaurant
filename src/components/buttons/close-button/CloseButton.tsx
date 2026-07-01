import { type MouseEvent } from "react";
import cn from "classnames";
import { IoClose } from "react-icons/io5";
import ButtonWithIcon from "../button-with-icon/ButtonWithIcon";
import styles from "./CloseButton.module.scss";

type Props = {
    isInCorner?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
};

const CloseButton = ({ isInCorner, onClick, disabled = false }: Props) => (
    <ButtonWithIcon
        className={cn({ [styles.inCorner]: isInCorner })}
        icon={<IoClose />}
        onClick={onClick}
        disabled={disabled}
        ariaLabel="Close"
        type="button"
    />
);

export default CloseButton;
