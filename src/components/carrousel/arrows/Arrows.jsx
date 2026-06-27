import classNames from "classnames";
import styles from "./Arrows.module.scss";
import ButtonWithIcon from "../../../../common/components/buttons/ButtonWithIcon/ButtonWithIcon";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Arrows = ({ onClick }) => {
    return (
        <>
            <div
                className={classNames(styles.arrow, styles.back)}
                onClick={() => onClick(-1)}
            >
                <ButtonWithIcon icon={<IoIosArrowBack />} />
            </div>
            <div
                className={classNames(styles.arrow, styles.forward)}
                onClick={() => onClick(1)}
            >
                <ButtonWithIcon icon={<IoIosArrowForward />} />
            </div>
        </>
    );
};

export default Arrows;
