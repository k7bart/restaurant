import { forwardRef, useImperativeHandle, useRef } from "react";
import { capitalize } from "../../../../utils/stringUtils";
import ProductLink from "./ProductLink/ProductLink";

import styles from "./Category.module.scss";

import type { Category } from "@k7bart/restaurant-shared-types";

export type CategoryHandle = {
    scrollIntoView: () => void;
};

const Category = forwardRef<CategoryHandle, { category: Category }>(
    function Category({ category }, ref) {
        const { name, dishes } = category;
        const categoryRef = useRef<HTMLDivElement>(null);

        useImperativeHandle(ref, () => ({
            scrollIntoView: () => {
                categoryRef.current?.scrollIntoView({ behavior: "smooth" });
            },
        }));

        return (
            <div ref={categoryRef} className={styles.category} id={name}>
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
