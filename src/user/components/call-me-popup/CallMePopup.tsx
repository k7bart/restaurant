import { useEffect, useState, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector } from "../../../hooks";

import { ACTIVITY_EVENTS, INACTIVITY_TIME } from "../../../consts";
import * as yup from "yup";
import Button from "../../../common/components/buttons/Button/Button";
import Form from "../form/Form";
import PhoneInput from "../Inputs/PhoneInput";
import Popup from "../popup/Popup";
import Text from "../text/Text";

import styles from "./CallMePopup.module.scss";

import type { User } from "@k7bart/restaurant-shared-types";

const callMePopupSchema = yup.object({
    phone: yup.string().required("Please provide your phone number"),
});

const CallMePopup = () => {
    const [showModal, setShowModal] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetTimer = () => {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(
            () => setShowModal(true),
            INACTIVITY_TIME,
        );
    };

    useEffect(() => {
        ACTIVITY_EVENTS.forEach((event) =>
            window.addEventListener(event, resetTimer),
        );
        resetTimer();

        return () => {
            ACTIVITY_EVENTS.forEach((event) =>
                window.removeEventListener(event, resetTimer),
            );
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const user = useAppSelector((state) => state.user);

    const methods = useForm({
        resolver: yupResolver(callMePopupSchema),
        defaultValues: {
            phone: user ? user.phone : "",
        },
    });

    const onSubmit = (data: User["phone"]) => console.log(data);

    if (!showModal) return null;

    return (
        <Popup
            backgroundStyles={styles.popupBackground}
            closePopup={() => setShowModal(false)}
            popupStyles={styles.popup}
        >
            <FormProvider {...methods}>
                <Form onSubmit={onSubmit}>
                    <header className={styles.header}>
                        <h3>Need some help?</h3>

                        <Text size="large">
                            Don&apos;t worry, we&apos;re always here for you
                            whenever you need us
                        </Text>
                    </header>

                    <PhoneInput />

                    <Button size="small" color="wisteria" type="submit">
                        Call Me
                    </Button>
                </Form>
            </FormProvider>
        </Popup>
    );
};

export default CallMePopup;
