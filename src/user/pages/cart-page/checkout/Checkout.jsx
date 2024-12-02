import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import ContentSection from "../../../components/page-sructure/ContentSection/ContentSection";

import { useState } from "react";

import DeliveryCheckout from "./DeliveryCheckout";
import OptionsButtons from "../../../components/options-buttons/OptionsButtons";

import styles from "./Checkout.module.scss";
import { Link } from "react-router-dom";
import Button from "../../../../common/components/buttons/Button/Button";
import TotalPrice from "../../../components/total-price/TotalPrice";
import { getTotalOrderPrice } from "../../../../utils/priceUtils";
import LabeledCheckbox from "../../../components/LabeledCheckbox/LabeledCheckbox";

const HEADER = {
    title: "Placing an order ",
    text: "Please fill in the form below to complete your order",
};

const DELIVERY_LABEL = "Delivery method";
const DELIVERY_OPTIONS = [
    { option: "delivery", label: "Delivery" },
    { option: "to-go", label: "To go" },
    { option: "advance", label: "Order in advance" },
];

const Checkout = () => {
    const cart = useSelector((state) => state.cart);

    const total = getTotalOrderPrice(cart).toFixed(2);

    const [deliveryMethod, setDeliveryMethod] = useState("delivery");

    const user = useSelector((state) => state.user);

    // const {
    //     register,
    //     formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(schema),
    //     defaultValues: {
    //         phone,
    //     },
    // });

    // collect data somehow

    return (
        <ContentSection additionalStyles={styles.content} header={HEADER}>
            <OptionsButtons
                label={DELIVERY_LABEL}
                onChange={setDeliveryMethod}
                options={DELIVERY_OPTIONS}
                selectedOption={deliveryMethod}
            />

            {deliveryMethod === "delivery" && <DeliveryCheckout user={user} />}

            <LabeledCheckbox text="Call me for details" />

            <TotalPrice additionalStyles={styles.totalPrice} price={total} />

            <Link className={styles.completeButton} to="/cart/checkout">
                <Button size="large">Complete the order</Button>
            </Link>
        </ContentSection>
    );
};

export default Checkout;
