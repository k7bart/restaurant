import { FaLeaf } from "react-icons/fa";
import styles from "./Title.module.scss";

type Props = {
    name: string;
    isVegan?: boolean;
};

const Title = ({ name, isVegan }: Props) => (
    <div className={styles.title}>
        <h4>{name}</h4>
        {isVegan && <FaLeaf />}
    </div>
);

export default Title;
