import { type Option } from "@k7bart/restaurant-shared-types";
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
