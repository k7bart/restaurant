import PropTypes from "prop-types";
import Text from "../../../../../../components/Text/Text";
import styles from "./Photo.module.scss";

const Photo = ({ photo }) => {
    return (
        <div className={styles.container}>
            {photo ? (
                <img src={photo} alt={name} />
            ) : (
                <Text align="center" color="white" size="large">
                    Sorry, I&apos;m at a photoshoot
                </Text>
            )}
        </div>
    );
};

Photo.propTypes = {
    photo: PropTypes.string,
};

export default Photo;
