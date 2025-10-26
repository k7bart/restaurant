import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { cartPageBackgroundUrl } from "../../../constants/backgroundUrls";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

const CartPage = () => {
    return (
        <TwoSectionsPage title="Cart">
            <CoverSection
                subtitle="Experience"
                title="Complimentary Shipping"
                backgroundImage={cartPageBackgroundUrl}
            />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </TwoSectionsPage>
    );
};

export default CartPage;
