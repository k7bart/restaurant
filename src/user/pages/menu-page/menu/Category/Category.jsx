import { forwardRef, useImperativeHandle, useRef } from "react";
import { capitalize } from "../../../../../utils/stringUtils";
import ProductLink from "./ProductLink/ProductLink";
import PropTypes from "prop-types";
import styles from "./Category.module.scss";

const Category = forwardRef(function Category({ category }, ref) {
    const { name, products } = category;
    const categoryRef = useRef();

    useImperativeHandle(ref, () => ({
        scrollIntoView: () => {
            categoryRef.current.scrollIntoView({ behavior: "smooth" });
        },
    }));

    return (
        <div ref={categoryRef} className={styles.category} id={name}>
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
});

Category.propTypes = {
    category: PropTypes.object,
};

export default Category;
