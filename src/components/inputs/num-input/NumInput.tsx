import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "./NumInput.module.scss";

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
        <div className={styles.numInput}>
            <button onClick={handleDecrement} disabled={amount === min}>
                <FaMinus />
            </button>
            <input
                value={amount}
                maxLength={3}
                type="text"
                inputMode="numeric"
                readOnly
            />
            <button onClick={handleIncrement}>
                <FaPlus />
            </button>
        </div>
    );
};

export default NumInput;
