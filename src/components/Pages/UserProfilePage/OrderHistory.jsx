import { useSelector } from "react-redux";
import { IoRepeat } from "react-icons/io5";
import AccordionItem from "./AccordionItem";

const OrderHistory = () => {
    const orders = useSelector((state) => state.user.orders);

    return (
        <AccordionItem title="Order history">
            {orders.map((order) => {
                return (
                    <div className="order" key={order.id}>
                        <p>{order.id}</p>
                        <p>{order.date}</p>
                        <p>${order.price}</p>
                        <p>{order.address}</p>
                        <button className="repeat-button">
                            <IoRepeat />
                        </button>
                    </div>
                );
            })}
        </AccordionItem>
    );
};

export default OrderHistory;
