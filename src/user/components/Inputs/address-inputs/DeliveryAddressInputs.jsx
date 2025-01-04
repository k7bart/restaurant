import PropTypes from "prop-types";

import CityInput from "./CityInput";
import EntranceInput from "./Entrance";
import HouseInput from "./HouseInput";
import Input from "../Input/Input";
import StreetInput from "./StreetInput";

const DeliveryAddressInputs = ({ errors, register }) => {
    return (
        <>
            <div>
                <CityInput error={errors.city} register={register} required />

                <StreetInput
                    error={errors.street}
                    register={register}
                    required
                />

                <HouseInput error={errors.house} register={register} required />
            </div>

            <div>
                <EntranceInput error={errors.entrance} register={register} />

                <Input
                    error={errors.floor}
                    fieldName="floor"
                    register={register}
                />

                <Input
                    error={errors.apartment}
                    fieldName="apartment"
                    label="Apt/office"
                    register={register}
                />

                <Input
                    error={errors.intercom}
                    fieldName="intercom"
                    register={register}
                />
            </div>
        </>
    );
};

DeliveryAddressInputs.propTypes = {
    errors: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
};

export default DeliveryAddressInputs;
