import { FaCartArrowDown } from "react-icons/fa6";
import styles from "./OrderRow.module.scss";
import ButtonWithIcon from "../../../../../common/components/buttons/ButtonWithIcon/ButtonWithIcon";
import Row from "../../../../../common/components/Row/Row";

const OrderRow = ({ order, onClick }) => {
    const { id, date, amount, address, orderedProducts } = order;
    return (
        <Row className={styles.order}>
            <p className={styles.id}>{id}</p>
            <p className={styles.date}>{date}</p>
            <p className={styles.amount}>${amount}</p>
            <p className={styles.address}>{address}</p>
            <ButtonWithIcon
                icon={<FaCartArrowDown />}
                onClick={() => onClick(orderedProducts)}
            />
        </Row>
    );
};

export default OrderRow;
