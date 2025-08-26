import { Link } from "react-router-dom";
import { useProductInCart } from "../../../../../../hooks/useProductInCart";
import { capitalize } from "../../../../../../utils/stringUtils";
import Amount from "./Amount";
import Badge from "../../../../../components/Badge/Badge";
import Ingrediens from "./Ingredients";
import Photo from "./Photo/Photo";
import Price from "./Price/Price";
import PropTypes from "prop-types";
import Title from "./Title/Title";
import styles from "./ProductLink.module.scss";
import classNames from "classnames";

const ProductLink = ({ product, category }) => {
    const {
        discountPercent,
        id,
        ingredients,
        isDishOfTheDay,
        isVegan,
        name,
        photos,
        price,
    } = product;
    const photo = photos?.[0];

    const { amount, handleAmountChange } = useProductInCart(product, category);

    return (
        <Link to={`/menu/${category}/${id}`} className={styles.productLink}>
            <div className={styles.withImage}>
                <Photo photo={photo} />

                <div className={styles.badges}>
                    {isDishOfTheDay && (
                        <Badge text={`${capitalize(category)} of the Day`} />
                    )}

                    {discountPercent && <Badge text={`-${discountPercent}$`} />}
                </div>

                <div
                    className={classNames(styles.amountContainer, {
                        [styles.visible]: amount,
                    })}
                    onClick={(e) => e.preventDefault()}
                >
                    {amount ? (
                        <Amount amount={amount} onChange={handleAmountChange} />
                    ) : (
                        <button onClick={() => handleAmountChange(1)}>
                            Add to cart
                        </button>
                    )}
                </div>
            </div>

            <Title name={name} isVegan={isVegan} />

            {ingredients && <Ingrediens ingredients={ingredients} />}

            <Price discountPercent={discountPercent} price={price} />
        </Link>
    );
};

ProductLink.propTypes = {
    product: PropTypes.shape({
        discountPercent: PropTypes.number,
        id: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        isDishOfTheDay: PropTypes.bool,
        isVegan: PropTypes.bool,
        name: PropTypes.string.isRequired,
        photos: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.number.isRequired,
    }).isRequired,
    category: PropTypes.string.isRequired,
};

export default ProductLink;
