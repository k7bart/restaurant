import { capitalize } from "../../../../../utils/stringUtils";
import ProductLink from "./ProductLink/ProductLink";

import styles from "./Category.module.scss";

import type { Category } from "@k7bart/restaurant-shared-types";

const Category = ({ category }: { category: Category }) => {
    const { name, dishes } = category;

    return (
        <div className={styles.category} id={name}>
            <h3>{capitalize(name)}</h3>

            <div>
                {dishes.map((dish) => (
                    <ProductLink key={dish.id} dish={dish} />
                ))}
            </div>
        </div>
    );
};

export default Category;
