import CustomLink from "../../components/links/custom-link/CustomLink";
import Text from "../../components/text/Text";

type Props = {
    text: string;
    link?: string;
};

const NoDataMessage = ({ text, link }: Props) => (
    <Text size="medium">
        {text}&nbsp;
        {link && (
            <CustomLink color="wisteria" fontWeight="thin" to={link}>
                here
            </CustomLink>
        )}
    </Text>
);

export default NoDataMessage;
