import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { addressToStr } from "../../../../utils/addressUtils";
import { dateFormat } from "../../../../utils/dateUtils";
import { FaCartArrowDown } from "react-icons/fa6";
import type { Order } from "@k7bart/restaurant-shared-types";

import ButtonWithIcon from "../../../../components/buttons/button-with-icon/ButtonWithIcon";
import Text from "../../../../components/text/Text";
import Row from "../../../../components/row/Row";

import styles from "./OrderRow.module.scss";

const OrderRow = ({ order }: { order: Order }) => {
    const navigate = useNavigate();
    const { id, createdAt, total, address, orderedItems } = order;

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
                {dayjs(createdAt).format(dateFormat)}
            </Text>

            <Text className={styles.amount} size="medium">
                ${total}
            </Text>

            {address && (
                <Text className={styles.address} size="medium">
                    {addressToStr(address)}
                </Text>
            )}

            <ButtonWithIcon icon={<FaCartArrowDown />} onClick={handleClick} />
        </Row>
    );
};

export default OrderRow;
