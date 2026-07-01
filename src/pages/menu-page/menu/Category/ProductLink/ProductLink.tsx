import { Link } from "react-router-dom";
import { capitalize } from "../../../../../utils/stringUtils";
import Amount from "./Amount";
import Badge from "../../../../../components/badge/Badge";
import Photo from "./Photo/Photo";
import Price from "./Price/Price";
import Title from "./Title/Title";
import styles from "./ProductLink.module.scss";
import Text from "../../../../../components/text/Text";

import type { Dish } from "@k7bart/restaurant-shared-types";

const ProductLink = ({ dish }: { dish: Dish }) => {
    const {
        category,
        discountPercent,
        id,
        ingredients,
        isDishOfTheDay,
        isVegan,
        name,
        photos,
        price,
    } = dish;

    return (
        <Link to={`/menu/${category}/${id}`} className={styles.productLink}>
            <div className={styles.withImage}>
                <Photo url={photos?.[0]} />

                <div className={styles.badges}>
                    {isDishOfTheDay && (
                        <Badge text={`${capitalize(category)} of the Day`} />
                    )}

                    {discountPercent && <Badge text={`-${discountPercent}$`} />}
                </div>

                <Amount dish={dish} />
            </div>

            <Title name={name} isVegan={isVegan} />

            {ingredients && <Text size="large">{ingredients.join(", ")}</Text>}

            <Price discountPercent={discountPercent} price={price} />
        </Link>
    );
};

export default ProductLink;
