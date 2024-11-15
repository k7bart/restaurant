import { FaCartArrowDown } from "react-icons/fa6";
import styles from "./OrderRow.module.scss";
import ButtonWithIcon from "../../../../../common/components/buttons/ButtonWithIcon/ButtonWithIcon";
import Text from "../../../../components/Text/Text";
import Row from "../../../../../common/components/Row/Row";

const OrderRow = ({ order, onClick }) => {
    const { id, date, amount, address, orderedProducts } = order;
    return (
        <Row className={styles.order}>
            <Text className={styles.id}>{id}</Text>
            <Text className={styles.date}>{date}</Text>
            <Text className={styles.amount}>${amount}</Text>
            <Text className={styles.address}>{address}</Text>
            <ButtonWithIcon
                icon={<FaCartArrowDown />}
                onClick={() => onClick(orderedProducts)}
            />
        </Row>
    );
};

export default OrderRow;
