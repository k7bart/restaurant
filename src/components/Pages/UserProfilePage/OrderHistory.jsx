import { IoRepeat } from "react-icons/io5";
import AccordionItem from "./AccordionItem";

const OrderHistory = ({ user }) => {
    return (
        <AccordionItem title="Order history">
            {user.orders.map((order) => {
                return (
                    <div key={order.id} className="row">
                        <p>{order.id}</p>
                        <p>{order.date}</p>
                        <p>${order.price}</p>
                        <p>{order.address}</p>
                        <button className="with-svg">
                            <IoRepeat />
                        </button>
                    </div>
                );
            })}
        </AccordionItem>
    );
};

export default OrderHistory;
