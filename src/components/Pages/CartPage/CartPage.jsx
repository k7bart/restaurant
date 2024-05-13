import { useSelector } from "react-redux";
import Cart from "./Cart";
import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import TwoSectionsPage from "../../TwoSectionsPage";
import image from "../../../assets/covers/moped.jpeg";
import "./CartPage.scss";

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const header = {
        title: "You're ordering",
        text: "We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time.",
    };
    const emptyCart = cart.length === 0;
    const emptyCartHeader = {
        title: "Place your order",
        text: "We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time.",
    };

    return (
        <TwoSectionsPage title="Cart">
            <CoverSection>
                <Cover
                    subtitle="Experience"
                    title="Complimentary Shipping"
                    backgroundImage={image}
                />
            </CoverSection>
            <ContentSection header={emptyCart ? emptyCartHeader : header}>
                {!emptyCart && <Cart />}
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default CartPage;
