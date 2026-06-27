import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { cartPageBackgroundUrl } from "../../../constants/backgroundUrls";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";
import Loader from "../../components/loader/Loader";

const CartPage = () => (
    <TwoSectionsPage title="Cart">
        <CoverSection
            subtitle="Experience"
            title="Complimentary Shipping"
            backgroundImage={cartPageBackgroundUrl}
        />
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </TwoSectionsPage>
);

export default CartPage;
