import Text from "../../../../../../components/text/Text";
import styles from "./Photo.module.scss";

const Photo = ({ url }: { url?: string }) => (
    <div className={styles.container}>
        {url ? (
            <img src={url} alt="" />
        ) : (
            <Text align="center" color="white" size="large">
                Sorry, I&apos;m at a photoshoot
            </Text>
        )}
    </div>
);

export default Photo;
