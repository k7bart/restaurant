import { useMe } from "../../../hooks/useMe";

import OrderRow from "./order-row/OrderRow";

const OrderHistory = () => {
    const { orders } = useMe();

    return (
        <>
            {orders.map((order) => (
                <OrderRow key={order.id} order={order} />
            ))}
        </>
    );
};

export default OrderHistory;
