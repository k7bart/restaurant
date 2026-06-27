import PropTypes from "prop-types";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { addressToStr } from "../../../../../utils/addressUtils";
import { dateFormat } from "../../../../../utils/dateUtils";
import { FaCartArrowDown } from "react-icons/fa6";
import type { Order } from "@k7bart/restaurant-shared-types";

import ButtonWithIcon from "../../../../../components/buttons/ButtonWithIcon/ButtonWithIcon";
import Text from "../../../../components/text/Text";
import Row from "../../../../../components/Row/Row";

import styles from "./OrderRow.module.scss";

const OrderRow = ({ order }: { order: Order }) => {
    const navigate = useNavigate();
    const { id, date, amount, address, orderedItems } = order;

    const handleClick = () => {
        console.log(orderedItems);
        navigate("/cart");
    };

    return (
        <Row additionalStyles={styles.order}>
            <Text className={styles.id} size="medium">
                {id}
            </Text>

            <Text className={styles.date} size="medium">
                {dayjs(date).format(dateFormat)}
            </Text>

            <Text className={styles.amount} size="medium">
                ${amount}
            </Text>

            <Text className={styles.address} size="medium">
                {addressToStr(address)}
            </Text>

            <ButtonWithIcon icon={<FaCartArrowDown />} onClick={handleClick} />
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
