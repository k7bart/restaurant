import NumInput from "../../../components/inputs/num-input/NumInput";

import styles from "./Amount.module.scss";

interface Props {
    amount: number;
    onChange: (value: number) => void;
}

const Amount = ({ amount, onChange }: Props) => (
    <div className={styles.amount}>
        <NumInput amount={amount} min={0} onChange={onChange} />
    </div>
);

export default Amount;
