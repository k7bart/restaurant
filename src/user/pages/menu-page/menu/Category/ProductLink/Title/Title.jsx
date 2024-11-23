import PropTypes from "prop-types";
import { FaLeaf } from "react-icons/fa";
import styles from "./Title.module.scss";

const Title = ({ name, isVegan }) => {
    return (
        <div className={styles.title}>
            <h4>{name}</h4>
            {isVegan && <FaLeaf />}
        </div>
    );
};

Title.propTypes = {
    name: PropTypes.string.isRequired,
    isVegan: PropTypes.bool,
};

export default Title;
