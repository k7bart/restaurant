import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/slices/cartSlice";
import { menu } from "../../../state";
import { IoRepeat } from "react-icons/io5";

import AccordionItem from "../../Accordion/AccordionItem";

const OrderHistory = ({ orders }) => {
    const dispatch = useDispatch();

    const addOrderToCart = (orderedProducts) => {
        orderedProducts.forEach(({ id, category, amount }) => {
            const product = menu
                .find((c) => c.name === category)
                ?.products.find((p) => p.id === id);

            dispatch(addProduct({ ...product, amount }));
        });
    };

    return (
        <AccordionItem title="Order history">
            {orders.map(({ id, date, amount, address, orderedProducts }) => {
                return (
                    <div key={id} className="row">
                        <p>{id}</p>
                        <p>{date}</p>
                        <p>${amount}</p>
                        <p>{address}</p>
                        <button
                            className="with-svg"
                            onClick={() => addOrderToCart(orderedProducts)}
                        >
                            <IoRepeat />
                        </button>
                    </div>
                );
            })}
        </AccordionItem>
    );
};

export default OrderHistory;
