import { capitalize } from "../../../utils/stringUtils";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const ProductLink = ({ dish, category }) => {
    return (
        <Link to={`/menu/${category}/${dish.id}`} className="product-link">
            <div className={dish.isDishOfTheDay && "border"}>
                {dish.isDishOfTheDay && (
                    <p className="badge">{capitalize(category)} of the Day</p>
                )}

                <img src={dish.photos[0]} alt={dish.name} />

                <div className="content">
                    <div>
                        <div className="title">
                            <h4>{dish.name}</h4>
                            {dish.isVegan && <FaLeaf />}
                        </div>
                        <div className="price">
                            {dish.onSale && (
                                <p className="sale">{"$" + dish.oldPrice}</p>
                            )}

                            {"$" + dish.price}
                        </div>
                    </div>

                    <p>{dish.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductLink;
