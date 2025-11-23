import styles from "./Nutrients.module.scss";

import type { Nutrient } from "@k7bart/restaurant-shared-types";

const getUnit = (name: string) => (name === "calories" ? "ccal" : "g");

const Nutrients = ({ nutrients }: { nutrients: Nutrient[] }) => (
    <div className={styles.nutrients}>
        {nutrients.map((nutrient) => (
            <div key={nutrient.name}>
                <div className={styles.text}>{nutrient.name}</div>
                <p>{nutrient.amount + " " + getUnit(nutrient.name)}</p>
            </div>
        ))}
    </div>
);

export default Nutrients;
