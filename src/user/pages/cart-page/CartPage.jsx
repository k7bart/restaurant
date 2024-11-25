import { Outlet } from "react-router-dom";
import { cartPageBackgroundUrl } from "../../../constants/backgroundUrls";

import Cover from "../../components/half-page-cover/Cover";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

const CartPage = () => {
    return (
        <TwoSectionsPage title="Cart">
            <CoverSection>
                <Cover
                    subtitle="Experience"
                    title="Complimentary Shipping"
                    backgroundImage={cartPageBackgroundUrl}
                />
            </CoverSection>
            <Outlet />
        </TwoSectionsPage>
    );
};

export default CartPage;
