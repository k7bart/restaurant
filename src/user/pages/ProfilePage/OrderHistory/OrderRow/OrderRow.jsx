import { FaCartArrowDown } from "react-icons/fa6";
import styles from "./OrderRow.module.scss";
import ButtonWithSVG from "../../../../../common/components/buttons/ButtonWithSVG/ButtonWithSVG";
import Row from "../../../../../common/components/Row/Row";

const OrderRow = ({ order, onClick }) => {
    const { id, date, amount, address, orderedProducts } = order;
    return (
        <Row className={styles.order}>
            <p className={styles.id}>{id}</p>
            <p className={styles.date}>{date}</p>
            <p className={styles.amount}>${amount}</p>
            <p className={styles.address}>{address}</p>
            <ButtonWithSVG>
                <FaCartArrowDown onClick={() => onClick(orderedProducts)} />
            </ButtonWithSVG>
        </Row>
    );
};

export default OrderRow;
