import CityInput from "./CityInput";
import EntranceInput from "./Entrance";
import HouseInput from "./HouseInput";
import Input from "../input/Input";
import StreetInput from "./StreetInput";

const DeliveryAddressInputs = () => (
    <>
        <div>
            <CityInput required />

            <StreetInput required />

            <HouseInput required />
        </div>

        <div>
            <EntranceInput />

            <Input fieldName="floor" />

            <Input fieldName="apartment" label="Apt/office" />

            <Input fieldName="intercom" />
        </div>
    </>
);

export default DeliveryAddressInputs;
