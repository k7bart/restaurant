import { IoClose } from "react-icons/io5";

const Popup = ({ closePopup, children }) => {
    return (
        <div className="popup">
            <div>
                <button className="with-svg close" onClick={closePopup}>
                    <IoClose />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;
