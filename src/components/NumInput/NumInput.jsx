import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./NumInput.scss";

const NumInput = ({ amount, onChange }) => {
    const handleIncrement = () => {
        onChange(amount + 1);
    };
    const handleDecrement = () => {
        if (amount === 1) return;
        onChange(amount - 1);
    };

    return (
        <div className="numInput">
            <button
                className="product-count less-product"
                onClick={handleDecrement}
                disabled={amount <= 1}
            >
                <FaMinus />
            </button>
            <input
                value={amount}
                maxLength="3"
                type="text"
                inputMode="numeric"
                readOnly // todo: add manual editing
            />
            <button
                className="product-count more-product"
                onClick={handleIncrement}
            >
                <FaPlus />
            </button>
        </div>
    );
};

export default NumInput;
