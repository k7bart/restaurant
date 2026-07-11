import { forwardRef } from "react";
import { capitalize } from "../../../../utils/stringUtils";
import ProductLink from "./product-link/ProductLink";

import styles from "./Category.module.scss";

import type { Category } from "@k7bart/restaurant-shared-types";

const Category = forwardRef<HTMLDivElement, { category: Category }>(
    function Category({ category }, ref) {
        const { name, dishes } = category;

        return (
            <div ref={ref} className={styles.category} id={name}>
                <h3>{capitalize(name)}</h3>

                <div>
                    {dishes.map((dish) => (
                        <ProductLink key={dish.id} dish={dish} />
                    ))}
                </div>
            </div>
        );
    },
);

export default Category;
