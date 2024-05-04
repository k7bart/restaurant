import { useSelector } from "react-redux";
import Cart from "./Cart";
import Cover from "../../Cover/Cover";
import PageWithCover from "../../PageWithCover/PageWithCover";
import Section from "../../Section/Section";
import image from "../../../assets/covers/moped.jpeg";
import "./CartPage.scss";

const CartPage = () => {
    const cart = useSelector((state) => state.cart);

    const emptyCart = cart.length === 0;
    const emptyCartHeader = {
        title: "Place your order",
        text: "We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time.",
    };

    const header = {
        title: "You're ordering",
        text: "We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time.",
    };

    const section = (
        <Section header={emptyCart ? emptyCartHeader : header}>
            {!emptyCart && <Cart cart1={cart} />}
        </Section>
    );

    const cover = (
        <Cover
            subtitle="Experience"
            title="Complimentary Shipping"
            backgroundImage={image}
        />
    );

    return (
        <PageWithCover
            cover={cover}
            section={section}
            addLogo={true}
            addNavBar={true}
        />
    );
};

export default CartPage;
