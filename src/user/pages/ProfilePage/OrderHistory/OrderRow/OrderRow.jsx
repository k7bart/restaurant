import { FaCartArrowDown } from "react-icons/fa6";
import ButtonWithSVG from "../../../../../common/components/buttons/ButtonWithSVG/ButtonWithSVG";
import classNames from "classnames";
import styles from "./OrderRow.module.scss";

const OrderRow = ({ order, onClick }) => {
    const { id, date, amount, address, orderedProducts } = order;
    return (
        <div key={id} className={classNames(styles.order, styles.row)}>
            <p className={styles.id}>{id}</p>
            <p className={styles.date}>{date}</p>
            <p className={styles.amount}>${amount}</p>
            <p className={styles.address}>{address}</p>
            <ButtonWithSVG>
                <FaCartArrowDown onClick={() => onClick(orderedProducts)} />
            </ButtonWithSVG>
        </div>
    );
};

export default OrderRow;
