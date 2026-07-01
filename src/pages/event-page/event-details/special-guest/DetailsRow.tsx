import { type Option } from "@k7bart/restaurant-shared-types";
import Row from "../../../../components/row/Row";
import Text from "../../../../components/text/Text";

const DetailsRow = ({ label, value }: Option) => (
    <Row>
        <Text size="large">{label}</Text>
        <Text color="white" size="large">
            {value}
        </Text>
    </Row>
);

export default DetailsRow;
