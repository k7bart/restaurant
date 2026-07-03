import { useMe } from "../../../hooks/useMe";

import NoDataMessage from "../NoDataMessage";

import OrderRow from "./order-row/OrderRow";

const OrderHistory = () => {
    const { orders } = useMe();

    if (!orders || !orders.length)
        return (
            <NoDataMessage
                text="You don't have any orders yet. We invite you to check out our menu"
                link="/menu"
            />
        );

    return (
        <>
            {orders.map((order) => (
                <OrderRow key={order.id} order={order} />
            ))}
        </>
    );
};

export default OrderHistory;
