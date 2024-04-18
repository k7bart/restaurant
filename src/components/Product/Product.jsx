import { useParams } from "react-router-dom";
import "./Product.scss";
import menu from "../Menu/menu";

const Product = () => {
    const { category } = useParams();
    const { productId } = useParams();

    const product = menu
        .find((c) => c.name === category)
        .dishes.find((p) => p.id === productId);

    return <div className="product">{product.name}</div>;
};

export default Product;
