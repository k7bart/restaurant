import cn from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ButtonWithIcon from "../../buttons/button-with-icon/ButtonWithIcon";
import styles from "./Arrows.module.scss";

const Arrows = ({ onClick }: { onClick: (step: number) => void }) => (
    <>
        <div
            className={cn(styles.arrow, styles.back)}
            onClick={() => onClick(-1)}
        >
            <ButtonWithIcon icon={<IoIosArrowBack />} />
        </div>
        <div
            className={cn(styles.arrow, styles.forward)}
            onClick={() => onClick(1)}
        >
            <ButtonWithIcon icon={<IoIosArrowForward />} />
        </div>
    </>
);

export default Arrows;
