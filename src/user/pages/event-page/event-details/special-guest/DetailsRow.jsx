import PropTypes from "prop-types";

import Row from "../../../../../common/components/Row/Row";
import Text from "../../../../components/Text/Text";

const DetailsRow = ({ label, value }) => (
    <Row>
        <Text size="large">{label}</Text>
        <Text color="white" size="large">
            {value}
        </Text>
    </Row>
);

DetailsRow.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
};

export default DetailsRow;
