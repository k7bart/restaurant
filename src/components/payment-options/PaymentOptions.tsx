import { type Option } from "../../types/Option";
import OptionsButtons from "../options-buttons/OptionsButtons";

type Props = {
    onClick: (option: string) => void;
    options: Option[];
    selectedOption: string;
};

const PaymentOptions = ({ onClick, options, selectedOption }: Props) => (
    <OptionsButtons
        label="Payment method"
        onClick={onClick}
        options={options}
        selectedOption={selectedOption}
    />
);

export default PaymentOptions;
