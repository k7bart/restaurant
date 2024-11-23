import styles from "./Nutrients.module.scss";

const getUnit = (name) => {
    return name === "calories" ? "ccal" : "g";
};

const Nutrients = ({ nutrients }) => {
    return (
        <div className={styles.nutrients}>
            {nutrients.map((nutrient) => (
                <div key={nutrient.name}>
                    <div className={styles.text}>{nutrient.name}</div>
                    <p>{nutrient.amount + " " + getUnit(nutrient.name)}</p>
                </div>
            ))}
        </div>
    );
};

export default Nutrients;
