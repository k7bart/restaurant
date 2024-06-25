import { IoRepeat } from "react-icons/io5";
import AccordionItem from "./AccordionItem";

const OrderHistory = ({ orders }) => {
    return (
        <AccordionItem title="Order history">
            {orders.map(({ id, date, price, address }) => {
                return (
                    <div key={id} className="row">
                        <p>{id}</p>
                        <p>{date}</p>
                        <p>${price}</p>
                        <p>{address}</p>
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
