import cn from "classnames";
import styles from "./CoverImage.module.scss";

type Props = {
    additionalStyles?: string;
    imageUrl: string;
};

const CoverImage = ({ additionalStyles, imageUrl }: Props) => (
    <div
        className={cn(styles.image, additionalStyles)}
        data-testid="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
);

export default CoverImage;
