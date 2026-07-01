import { useState } from "react";
import { FormProvider, useForm, type DefaultValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { combineDateTime } from "../../../utils/timeUtils";
import { getAvailableDay } from "../../../utils/dateUtils";
import { getTotalOrderPrice } from "../../../utils/priceUtils";
import { PAYMENT_OPTIONS } from "../../../components/payment-options/paymentOptionsConstants";
import { useAppSelector } from "../../../hooks";
import { addresses } from "../../../state";

import getAddressDefaultValues from "../../../components/inputs/address-inputs/address-yup-utils/getAddressDefaultValues";
import getSchema, { type CheckoutFormValues } from "./checkoutSchema";

import Button from "../../../components/buttons/button/Button";
import ContentSection from "../../../components/page-sructure/content-section/ContentSection";
import DateTimeInputs from "../../../components/inputs/date-time-inputs/DateTimeInputs";
import DeliveryAddressInputs from "../../../components/inputs/address-inputs/DeliveryAddressInputs";
import Form from "../../../components/form/Form";
import HorizontalDevider from "../../../components/horizontal-divider/HorizontalDevider";
import LabeledCheckbox from "../../../components/labeled-checkbox/LabeledCheckbox";
import NameInput from "../../../components/inputs/NameInput";
import OptionsButtons from "../../../components/options-buttons/OptionsButtons";
import PaymentOptions from "../../../components/payment-options/PaymentOptions";
import PhoneInput from "../../../components/inputs/PhoneInput";
import SelfPickupCheckout from "./SelfPickupCheckout";
import Textarea from "../../../components/textarea/Textarea";
import TotalPrice from "../../../components/total-price/TotalPrice";

import styles from "./Checkout.module.scss";

import type { Address, Option, Order } from "@k7bart/restaurant-shared-types";
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
    date: Date;
    time: Date;
}

const DELIVERY_OPTIONS: Option[] = [
    { value: "delivery", label: "Delivery" },
    { value: "selfPickup", label: "Self pickup" },
    { value: "advance", label: "Order in advance" },
];

const Checkout = () => {
    const cart = useAppSelector((state) => state.cart);
    const user = useAppSelector((state) => state.user);

    const total = getTotalOrderPrice(cart);
    const availableAdvanceOrderDay = getAvailableDay();

    const [deliveryMethod, setDeliveryMethod] =
        useState<DeliveryMethod>("delivery");
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("online");
    const [pickupAddressId, setPickupAddressId] = useState<
        Address["id"] | undefined
    >(undefined);
    const pickupAddress = addresses.find(
        (address) => address.id === pickupAddressId,
    );

    const defaultValues: DefaultValues<CheckoutFormValues> = {
        ...getAddressDefaultValues(
            user?.addresses?.find((address) => address.isCurrent),
        ),
        date: availableAdvanceOrderDay,
        name: user?.name || "",
        phone: user?.phone || "",
    };

    const methods = useForm<CheckoutFormValues>({
        resolver: yupResolver(getSchema(deliveryMethod)),
        defaultValues,
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
                        onClick={(value) =>
                            setDeliveryMethod(value as DeliveryMethod)
                        }
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
                                handlePickupAddressId={setPickupAddressId}
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
                                onClick={(value) =>
                                    setPaymentMethod(value as PaymentMethod)
                                }
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
