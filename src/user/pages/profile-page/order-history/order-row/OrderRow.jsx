import PropTypes from "prop-types";
import { FaCartArrowDown } from "react-icons/fa6";

import ButtonWithIcon from "../../../../../common/components/buttons/ButtonWithIcon/ButtonWithIcon";
import Text from "../../../../components/Text/Text";
import Row from "../../../../../common/components/Row/Row";

import styles from "./OrderRow.module.scss";

const OrderRow = ({ order, onClick }) => {
    const { id, date, amount, address, orderedProducts } = order;
    return (
        <Row additionalStyles={styles.order}>
            <Text className={styles.id} size="medium">
                {id}
            </Text>

            <Text className={styles.date} size="medium">
                {date}
            </Text>

            <Text className={styles.amount} size="medium">
                ${amount}
            </Text>

            <Text className={styles.address} size="medium">
                {address}
            </Text>

            <ButtonWithIcon
                icon={<FaCartArrowDown />}
                onClick={() => onClick(orderedProducts)}
            />
        </Row>
    );
};
OrderRow.propTypes = {
    order: PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
        orderedProducts: PropTypes.array.isRequired,
    }).isRequired,
    onClick: PropTypes.func,
};

export default OrderRow;
