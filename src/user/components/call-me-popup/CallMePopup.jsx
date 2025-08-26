import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { ACTIVITY_EVENTS, INACTIVITY_TIME } from "../../../consts";
import * as yup from "yup";
import Button from "../../../common/components/buttons/Button/Button";
import Form from "../form/Form";
import PhoneInput from "../Inputs/PhoneInput";
import Popup from "../Popup/Popup";
import Text from "../Text/Text";
import styles from "./CallMePopup.module.scss";

const callMePopupSchema = yup.object({
    phone: yup.string().required("Please provide your phone number"),
});

const CallMePopup = () => {
    const [showModal, setShowModal] = useState(false);
    const timerRef = useRef(null);

    const resetTimer = () => {
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(
            () => setShowModal(true),
            INACTIVITY_TIME
        );
    };

    useEffect(() => {
        ACTIVITY_EVENTS.forEach((event) =>
            window.addEventListener(event, resetTimer)
        );
        resetTimer();

        return () => {
            ACTIVITY_EVENTS.forEach((event) =>
                window.removeEventListener(event, resetTimer)
            );
            clearTimeout(timerRef.current);
        };
    }, []);

    const { phone } = useSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(callMePopupSchema),
        defaultValues: {
            phone,
        },
    });

    const onSubmit = (data) => console.log(data);

    const handleClose = () => setShowModal(false);

    return showModal ? (
        <Popup
            backgoundStyles={styles.popupBackground}
            closePopup={handleClose}
            popupStyles={styles.popup}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <header className={styles.header}>
                    <h3>Need some help?</h3>

                    <Text size="large">
                        Don&apos;t worry, we&apos;re always here for you
                        whenever you need us
                    </Text>
                </header>

                <PhoneInput register={register} error={errors.phone} />

                <Button size="small" color="wisteria" type="submit">
                    Call Me
                </Button>
            </Form>
        </Popup>
    ) : null;
};

export default CallMePopup;
