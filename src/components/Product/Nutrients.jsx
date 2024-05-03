const Nutrients = ({ nutrients }) => {
    const getUnit = (name) => {
        return name === "calories" ? "ccal" : "g";
    };

    return (
        <div className="nutrients">
            {nutrients.map((nutrient) => (
                <div key={nutrient.name}>
                    <div className="text">{nutrient.name}</div>
                    <p>{nutrient.amount + " " + getUnit(nutrient.name)}</p>
                </div>
            ))}
        </div>
    );
};

export default Nutrients;
