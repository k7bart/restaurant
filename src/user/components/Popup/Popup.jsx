import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Popup.module.scss";
import CloseButton from "../../../common/components/buttons/CloseButton/CloseButton";

const Popup = ({ backgoundStyles, closePopup, children, popupStyles }) => {
    return (
        <div className={cn(styles.popupBackground, backgoundStyles)}>
            <div className={cn(styles.popup, popupStyles)}>
                <CloseButton onClick={closePopup} isInCorner={true} />
                {children}
            </div>
        </div>
    );
};

Popup.propTypes = {
    backgoundStyles: PropTypes.string,
    closePopup: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    popupStyles: PropTypes.string,
};

export default Popup;
