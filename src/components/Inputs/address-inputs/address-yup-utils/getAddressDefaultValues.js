const getAddressDefaultValues = (currentAddress = {}) => {
    const {
        city = "",
        street = "",
        house = "",
        entrance = "",
        floor = "",
        apartment = "",
        intercom = "",
    } = currentAddress;

    return { city, street, house, entrance, floor, apartment, intercom };
};

export default getAddressDefaultValues;
