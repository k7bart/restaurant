import { useParams } from "react-router-dom";
import "./Product.scss";
import menu from "../Menu/menu";
import Carrousel from "../Carrousel/Carrousel";

const Product = () => {
    const { category } = useParams();
    const { productId } = useParams();

    const product = menu
        .find((c) => c.name === category)
        .dishes.find((p) => p.id === productId);

    return (
        <div className="product">
            <h3>{product.name}</h3>

            <div className="carrousel-container">
                <Carrousel photos={product.photos} dots={true} />
            </div>
        </div>
    );
};

export default Product;
