import styles from "./Popup.module.scss";
import CloseButton from "../../../common/components/buttons/CloseButton/CloseButton";

const Popup = ({ closePopup, children }) => {
    return (
        <div className={styles.popupBackground}>
            <div className={styles.popup}>
                <CloseButton onClick={closePopup} isInCorner={true} />
                {children}
            </div>
        </div>
    );
};

export default Popup;
