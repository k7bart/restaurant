import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { combineDateTime } from "../../../../utils/timeUtils";
import { getAvailableDay } from "../../../../utils/dateUtils";
import { getTotalOrderPrice } from "../../../../utils/priceUtils";
import { PAYMENT_OPTIONS } from "../../../components/payment-options/paymentOptionsConstants";

import getAddressDefaultValues from "../../../components/Inputs/address-inputs/address-yup-utils/getAddressDefaultValues";

import Button from "../../../../common/components/buttons/Button/Button";
import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection";
import DateTimeInputs from "../../../components/Inputs/date-time-inputs/DateTimeInputs";
import DeliveryAddressInputs from "../../../components/Inputs/address-inputs/DeliveryAddressInputs";
import Form from "../../../components/form/Form";
import HorizontalDevider from "../../../components/horizontal-divider/HorizontalDevider";
import LabeledCheckbox from "../../../components/LabeledCheckbox/LabeledCheckbox";
import NameInput from "../../../components/Inputs/NameInput";
import OptionsButtons from "../../../components/options-buttons/OptionsButtons";
import PaymentOptions from "../../../components/payment-options/PaymentOptions";
import PhoneInput from "../../../components/Inputs/PhoneInput";
import SelfPickupCheckout from "./SelfPickupCheckout";
import Textarea from "../../../components/textarea/Textarea";
import TotalPrice from "../../../components/total-price/TotalPrice";

import styles from "./Checkout.module.scss";
import getSchema from "./checkoutSchema";

const HEADER = {
    title: "Placing an order",
    text: "Please fill in the form below to complete your order",
};

const DELIVERY_OPTIONS = [
    { option: "delivery", label: "Delivery" },
    { option: "selfPickup", label: "Self pickup" },
    { option: "advance", label: "Order in advance" },
];

const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);

    const total = getTotalOrderPrice(cart);
    const addressDefaultValues = getAddressDefaultValues(
        user.addresses.find((address) => address.id === user.currentAddressId)
    );
    const availableAdvanceOrderDay = getAvailableDay();

    const [deliveryMethod, setDeliveryMethod] = useState("delivery");
    const [paymentMethod, setPaymentMethod] = useState("online");
    const [pickupAddress, setPickupAddress] = useState(null);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(getSchema(deliveryMethod)),
        defaultValues: {
            ...addressDefaultValues,
            date: availableAdvanceOrderDay,
            deliveryMethod: "delivery",
            name: user.name,
            paymentMethod: "online",
            phone: user?.phone || "",
        },
    });

    const createPayload = (data) => {
        const commonInfo = {
            customerInfo: {
                name: data.name,
                phone: data.phone,
                userId: user.id || null,
            },
            callForDetails: data.callForDetails,
            deliveryMethod,
            orderComment: data.orderComment,
            paymentMethod,
            total,
        };

        if (deliveryMethod === "selfPickup") {
            return { ...commonInfo, pickupAddress };
        }

        const address = {
            addressComment: data.addressComment,
            city: data.city,
            street: data.street,
            house: data.house,
            entrance: data.entrance,
            floor: data.floor,
            apartment: data.apartment,
            intercom: data.intercom,
        };

        if (deliveryMethod === "advance") {
            return {
                ...commonInfo,
                address,
                deliveryDateTime: combineDateTime(data.date, data.time),
            };
        }

        return { ...commonInfo, address };
    };

    const onSubmit = (data) => {
        console.log(createPayload(data));
        // Further processing
    };

    return (
        <ContentSection additionalStyles={styles.content} header={HEADER}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <OptionsButtons
                    label="Delivery method"
                    onClick={setDeliveryMethod}
                    options={DELIVERY_OPTIONS}
                    selectedOption={deliveryMethod}
                />

                <div>
                    <NameInput
                        register={register}
                        error={errors.name}
                        required
                    />

                    <PhoneInput
                        register={register}
                        error={errors.phone}
                        required
                    />
                </div>

                {deliveryMethod !== "selfPickup" && (
                    <>
                        <HorizontalDevider />

                        <DeliveryAddressInputs
                            errors={errors}
                            register={register}
                        />

                        <Textarea
                            text="Comment on the address"
                            register={register("addressComment")}
                        />
                    </>
                )}

                {deliveryMethod === "selfPickup" && (
                    <>
                        <HorizontalDevider />

                        <SelfPickupCheckout
                            handlePaymentMethod={setPaymentMethod}
                            handlePickupAddress={setPickupAddress}
                            selectedOption={paymentMethod}
                        />
                    </>
                )}

                {deliveryMethod === "advance" && (
                    <>
                        <HorizontalDevider />

                        <DateTimeInputs
                            control={control}
                            errors={errors}
                            startDate={availableAdvanceOrderDay}
                        />
                    </>
                )}

                {deliveryMethod !== "selfPickup" && (
                    <>
                        <HorizontalDevider />

                        <PaymentOptions
                            onClick={setPaymentMethod}
                            options={PAYMENT_OPTIONS}
                            selectedOption={paymentMethod}
                        />
                    </>
                )}

                <HorizontalDevider />

                <Textarea
                    text="Comment on the order"
                    register={register("orderComment")}
                />

                <LabeledCheckbox
                    text="Call me for details"
                    register={register("callForDetails")}
                />

                <TotalPrice
                    additionalStyles={styles.totalPrice}
                    price={total}
                />

                <Button type="submit" size="large">
                    Complete the order
                </Button>
            </Form>
        </ContentSection>
    );
};

export default Checkout;
