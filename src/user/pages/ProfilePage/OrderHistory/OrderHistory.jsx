import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../store/slices/cartSlice";
import { menu } from "../../../../state";
import OrderRow from "./OrderRow/OrderRow";

const addOrderToCart = (dispatch, orderedProducts) => {
    orderedProducts.forEach(({ id, category, amount }) => {
        const product = menu
            .find((c) => c.name === category)
            ?.products.find((p) => p.id === id);

        if (product) {
            dispatch(addProduct({ ...product, amount }));
        }
    });
};

const OrderHistory = ({ orders }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (orderedProducts) => {
        addOrderToCart(dispatch, orderedProducts);
        navigate("/cart");
    };

    return (
        <>
            {orders.map((order) => (
                <OrderRow key={order.id} order={order} onClick={handleClick} />
            ))}
        </>
    );
};

export default OrderHistory;
