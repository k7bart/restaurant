import { capitalize } from "../../../../../utils/stringUtils";
import ProductLink from "./ProductLink/ProductLink";
import PropTypes from "prop-types";
import styles from "./Category.module.scss";

const Category = ({ category }) => {
    const { name, products } = category;
    return (
        <div className={styles.category} id={name}>
            <h3>{capitalize(name)}</h3>

            <div>
                {products.map((product) => (
                    <ProductLink
                        key={product.id}
                        product={product}
                        category={name}
                    />
                ))}
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object,
};

export default Category;
