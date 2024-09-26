import PropTypes from "prop-types";
import Text from "../../../../../components/Text/Text";

const Ingrediens = ({ ingredients }) => {
    return <Text size="large">{ingredients.join(", ")}</Text>;
};

Ingrediens.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default Ingrediens;
