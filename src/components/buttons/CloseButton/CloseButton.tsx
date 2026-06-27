import cn from "classnames";
import { IoClose } from "react-icons/io5";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";

import styles from "./CloseButton.module.scss";

import { type MouseEvent } from "react";

export interface CloseButtonProps {
    isInCorner?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const CloseButton = ({
    isInCorner,
    onClick,
    disabled = false,
}: CloseButtonProps) => {
    return (
        <ButtonWithIcon
            className={cn({ [styles.inCorner]: isInCorner })}
            icon={<IoClose />}
            onClick={onClick}
            disabled={disabled}
            ariaLabel="Close"
            type="button"
        />
    );
};

export default CloseButton;
