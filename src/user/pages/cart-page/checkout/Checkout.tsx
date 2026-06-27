import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { combineDateTime } from "../../../../utils/timeUtils";
import { getAvailableDay } from "../../../../utils/dateUtils";
import { getTotalOrderPrice } from "../../../../utils/priceUtils";
import { PAYMENT_OPTIONS } from "../../../../components/payment-options/paymentOptionsConstants";
import { useAppSelector } from "../../../../hooks";

import getAddressDefaultValues from "../../../../components/Inputs/address-inputs/address-yup-utils/getAddressDefaultValues";
import getSchema from "../../../../pages/cart-page/checkout/checkoutSchema";

import Button from "../../../../components/buttons/Button/Button";
import ContentSection from "../../../../components/page-sructure/ContentSection/ContentSection";
import DateTimeInputs from "../../../../components/Inputs/date-time-inputs/DateTimeInputs";
import DeliveryAddressInputs from "../../../../components/Inputs/address-inputs/DeliveryAddressInputs";
import Form from "../../../../components/form/Form";
import HorizontalDevider from "../../../../components/horizontal-divider/HorizontalDevider";
import LabeledCheckbox from "../../../../components/labeled-checkbox/LabeledCheckbox";
import NameInput from "../../../../components/Inputs/NameInput";
import OptionsButtons from "../../../../components/options-buttons/OptionsButtons";
import PaymentOptions from "../../../../components/payment-options/PaymentOptions";
import PhoneInput from "../../../../components/Inputs/PhoneInput";
import SelfPickupCheckout from "../../../../pages/cart-page/checkout/SelfPickupCheckout";
import Textarea from "../../../../components/textarea/Textarea";
import TotalPrice from "../../../../components/total-price/TotalPrice";

import styles from "./Checkout.module.scss";

import type { Address, Order } from "@k7bart/restaurant-shared-types";
import type {
    DeliveryMethod,
    PaymentMethod,
} from "@k7bart/restaurant-shared-types";

interface OrderForm
    extends
        Omit<Order, "id" | "customer" | "orderedItems" | "total">,
        Omit<Address, "id" | "isCurrent"> {
    name: string;
    phone: string;
    surname: string;
    callForDetails: boolean;
    orderComment: string;
    date: string;
    time: string;
}

const DELIVERY_OPTIONS = [
    { option: "delivery", label: "Delivery" },
    { option: "selfPickup", label: "Self pickup" },
    { option: "advance", label: "Order in advance" },
];

const Checkout = () => {
    const cart = useAppSelector((state) => state.cart);
    const user = useAppSelector((state) => state.user);

    const total = getTotalOrderPrice(cart);
    const addressDefaultValues = getAddressDefaultValues(
        user?.addresses?.find((address) => address.isCurrent),
    );
    const availableAdvanceOrderDay = getAvailableDay();

    const [deliveryMethod, setDeliveryMethod] =
        useState<DeliveryMethod>("delivery");
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("online");
    const [pickupAddress, setPickupAddress] = useState<{
        id: string;
        text: string;
    } | null>(null);

    const methods = useForm({
        resolver: yupResolver(getSchema(deliveryMethod)),
        defaultValues: {
            ...addressDefaultValues,
            date: availableAdvanceOrderDay,
            deliveryMethod: "delivery",
            name: user?.name || "",
            paymentMethod: "online",
            phone: user?.phone || "",
        },
    });

    const createPayload = (data: OrderForm): Order => {
        const {
            name,
            phone,
            surname,
            callForDetails,
            orderComment,
            date,
            time,
            addressComment,
            city,
            street,
            house,
            entrance,
            floor,
            apartment,
            intercom,
            deliveryMethod,
            paymentMethod,
        } = data;

        const commonInfo = {
            id: crypto.randomUUID(),
            customer: {
                name,
                phone,
                surname: surname ?? undefined,
                id: user?.id ?? crypto.randomUUID(),
            },
            callForDetails,
            deliveryMethod,
            orderComment,
            orderedItems: cart,
            paymentMethod,
            total: getTotalOrderPrice(cart),
        };

        if (deliveryMethod === "selfPickup") {
            return {
                ...commonInfo,
                pickupAddress: pickupAddress ?? undefined,
            };
        }

        const address = {
            id: crypto.randomUUID(),
            addressComment: addressComment,
            city: city,
            street: street,
            house: house,
            entrance: entrance,
            floor: floor,
            apartment: apartment,
            intercom: intercom,
        };

        if (deliveryMethod === "advance") {
            return {
                ...commonInfo,
                address,
                deliveryDateTime: combineDateTime(
                    new Date(date),
                    new Date(time),
                ),
            };
        }

        return { ...commonInfo, address };
    };

    const onSubmit = (data: OrderForm) => {
        console.log(createPayload(data));
    };

    return (
        <ContentSection
            className={styles.content}
            title="Placing an order"
            subtitle="Please fill in the form below to complete your order"
        >
            <FormProvider {...methods}>
                <Form onSubmit={onSubmit}>
                    <OptionsButtons
                        label="Delivery method"
                        onClick={setDeliveryMethod}
                        options={DELIVERY_OPTIONS}
                        selectedOption={deliveryMethod}
                    />

                    <div>
                        <NameInput required />

                        <PhoneInput required />
                    </div>

                    {deliveryMethod !== "selfPickup" && (
                        <>
                            <HorizontalDevider />

                            <DeliveryAddressInputs />

                            <Textarea
                                fieldName="addressComment"
                                label="Comment on the address"
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
                        fieldName="orderComment"
                        label="Comment on the order"
                    />

                    <LabeledCheckbox
                        fieldName="callForDetails"
                        label="Call me for details"
                    />

                    <TotalPrice
                        additionalStyles={styles.totalPrice}
                        price={total}
                    />

                    <Button type="submit" size="large">
                        Complete the order
                    </Button>
                </Form>
            </FormProvider>
        </ContentSection>
    );
};

export default Checkout;
