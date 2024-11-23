import { useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import Cover from "../../components/half-page-cover/Cover";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import LinkComponent from "../../components/links/LinkComponent/LinkComponent";
import Text from "../../components/Text/Text";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

const header = {
    title: "You're ordering",
    text: "We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time.",
};
const emptyCartHeader = {
    title: "Place your order",
    text: "We deliver within the city and guarantee delivery within an hour, ensuring your meal arrives fresh and right on time.",
};

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const isCartEmpty = cart.length === 0;

    return (
        <TwoSectionsPage title="Cart">
            <CoverSection>
                <Cover
                    subtitle="Experience"
                    title="Complimentary Shipping"
                    backgroundImage="https://ik.imagekit.io/k7bart/restaurant/covers/moped.webp?updatedAt=1720592730650"
                />
            </CoverSection>
            <ContentSection header={isCartEmpty ? emptyCartHeader : header}>
                {isCartEmpty ? (
                    <Text size="large">
                        Your cart is empty, but we are eagerly awaiting your
                        order! You can checkout our menu&nbsp;
                        <LinkComponent color="wisteria" to="/menu" size="large">
                            here
                        </LinkComponent>
                    </Text>
                ) : (
                    <Cart />
                )}
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default CartPage;
