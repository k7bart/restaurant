import { useParams } from "react-router-dom";
import "./Product.scss";
import { menu } from "../../state";
import Logo from "../Logo/Logo";
import Carrousel from "../Carrousel/Carrousel";

const Product = () => {
    const { category } = useParams();
    const { productId } = useParams();

    const product = menu
        .find((c) => c.name === category)
        .dishes.find((p) => p.id === productId);

    const i = product.photos.map((photo, i) => (
        <img key={i} className="image" src={photo} />
    ));

    const props = {
        content: i,
        num: 1,
        dots: true,
        slideShow: false,
    };

    return (
        <div className="product">
            <Logo />

            <h3>{product.name}</h3>

            <Carrousel {...props} />
        </div>
    );
};

export default Product;
