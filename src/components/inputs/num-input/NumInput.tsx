import { FaMinus, FaPlus } from "react-icons/fa";
import "./NumInput.scss";

type Props = {
    amount: number;
    min?: number;
    onChange: (amount: number) => void;
};

const NumInput = ({ amount, min = 1, onChange }: Props) => {
    const handleIncrement = () => {
        onChange(amount + 1);
    };

    const handleDecrement = () => {
        if (amount === 0) return;
        onChange(amount - 1);
    };

    return (
        <div className="numInput">
            <button
                className="product-count less-product"
                onClick={handleDecrement}
                disabled={amount === min}
            >
                <FaMinus />
            </button>
            <input
                value={amount}
                maxLength={3}
                type="text"
                inputMode="numeric"
                readOnly
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
