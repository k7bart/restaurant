import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Popup.module.scss";
import CloseButton from "../buttons/close-button/CloseButton";

type Props = {
    backgroundStyles?: string;
    closePopup: () => void;
    children: ReactNode;
    popupStyles?: string;
};

const Popup = ({
    backgroundStyles,
    closePopup,
    children,
    popupStyles,
}: Props) => {
    return (
        <div className={cn(styles.popupBackground, backgroundStyles)}>
            <div className={cn(styles.popup, popupStyles)}>
                <CloseButton onClick={closePopup} isInCorner={true} />
                {children}
            </div>
        </div>
    );
};

export default Popup;
