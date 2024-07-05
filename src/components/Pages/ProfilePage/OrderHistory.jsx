import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/slices/cartSlice";
import { menu } from "../../../state";
import { FaCartArrowDown } from "react-icons/fa6";

import AccordionItem from "../../Accordion/AccordionItem";
import { useNavigate } from "react-router-dom";

const OrderHistory = ({ orders }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addOrderToCart = (orderedProducts) => {
        orderedProducts.forEach(({ id, category, amount }) => {
            const product = menu
                .find((c) => c.name === category)
                ?.products.find((p) => p.id === id);

            dispatch(addProduct({ ...product, amount }));
        });
    };

    const handleClick = (orderedProducts) => {
        addOrderToCart(orderedProducts);
        navigate("/cart");
    };

    return (
        <AccordionItem title="Order history">
            {orders.map(({ id, date, amount, address, orderedProducts }) => {
                return (
                    <div key={id} className="row order">
                        <p className="id">{id}</p>
                        <p className="date">{date}</p>
                        <p className="amount">${amount}</p>
                        <p className="address">{address}</p>
                        <button
                            className="with-svg"
                            onClick={() => handleClick(orderedProducts)}
                        >
                            <FaCartArrowDown />
                        </button>
                    </div>
                );
            })}
        </AccordionItem>
    );
};

export default OrderHistory;
