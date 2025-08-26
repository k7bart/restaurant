import { Link } from "react-router-dom";
import { capitalize } from "../../../../../../utils/stringUtils";
import Amount from "./Amount";
import Badge from "../../../../../components/Badge/Badge";
import Ingrediens from "./Ingredients";
import Photo from "./Photo/Photo";
import Price from "./Price/Price";
import PropTypes from "prop-types";
import Title from "./Title/Title";
import styles from "./ProductLink.module.scss";

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

                <Amount product={product} category={category} />
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
