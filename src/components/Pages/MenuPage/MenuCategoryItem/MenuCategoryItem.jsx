import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import "./MenuCategoryItem.scss";

const MenuItem = ({ dish, category }) => {
    if (!dish) return;

    const badge = dish.isDishOfTheDay && (
        <p className="badge">Starter of the Day</p>
    );
    const onSale = dish.onSale && <p className="sale">{"$" + dish.oldPrice}</p>;
    const isDishOfTheDay = dish.isDishOfTheDay ? "dish-of-the-day" : "";

    return (
        // Link to the product with its id as a parameter
        <Link to={`/menu/${category.name}/${dish.id}`} className="dish-link">
            <div className={"container " + isDishOfTheDay}>
                {badge}
                <img src={dish.photos[0]} alt={dish.name} />
                <div className="content">
                    <div>
                        <div className="title">
                            <h4>{dish.name}</h4>
                            {dish.isVegan && <FaLeaf />}
                        </div>
                        <div className="price">
                            {onSale}
                            {"$" + dish.price}
                        </div>
                    </div>

                    <p>{dish.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default MenuItem;
