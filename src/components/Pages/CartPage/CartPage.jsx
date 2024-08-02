import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import ContentSection from "../../ContentSection";
import Cover from "../../Cover/Cover";
import CoverSection from "../../CoverSection";
import TwoSectionsPage from "../../TwoSectionsPage";

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
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/moped.webp?updatedAt=1720592730650"
                />
            </CoverSection>
            <ContentSection header={emptyCart ? emptyCartHeader : header}>
                {emptyCart ? (
                    <p className="large">
                        Your cart is empty, but we are eagerly awaiting your
                        order! You can checkout our menu&nbsp;
                        <Link className="large wisteria" to="/menu">
                            here
                        </Link>
                    </p>
                ) : (
                    <Cart />
                )}
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default CartPage;
