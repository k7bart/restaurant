import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { getTotalPrice } from "../../../utils/priceUtils";
import { addProduct, updateProductAmount } from "../../../store/index";
import { menu } from "../../../state";

import Button from "../../../common/components/buttons/Button/Button";
import CartLink from "../../components/NavBar/CartLink";
import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import NumInput from "../../components/Inputs/NumInput/NumInput";
import Nutrients from "./Nutrients/Nutrients";
import ProductCarrousel from "./ProductCarrousel";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

const ProductPage = () => {
    const dispatch = useDispatch();
    const { category, productId } = useParams();
    const cart = useSelector((state) => state.cart);

    const product = useMemo(() => {
        const categoryData = menu.find((c) => c.name === category);
        return categoryData?.products.find((p) => p.id === productId);
    }, [category, productId]);

    const {
        name,
        photos,
        description,
        discountPercent,
        ingredients,
        nutrients,
        price,
    } = product;

    const productInCart = useMemo(() => {
        return cart.find((product) => product.id === productId);
    }, [cart, productId]);

    const [amount, setAmount] = useState(productInCart?.amount || 0);

    useEffect(() => {
        setAmount(productInCart ? productInCart.amount : 0);
    }, [productInCart]);

    const handleAmountChange = (newAmount) => {
        if (productInCart) {
            dispatch(updateProductAmount({ productId: product.id, newAmount }));
        } else {
            dispatch(addProduct({ ...product, amount: newAmount, category }));
        }
    };

    return (
        <TwoSectionsPage title={name} className="product-page">
            <CoverSection addLogo={false} addNavBar={false}>
                <div className="carrousel-container">
                    <ProductCarrousel photos={photos} />
                </div>
            </CoverSection>

            <ContentSection
                header={{
                    title: name,
                    text: description,
                }}
                nav={
                    <nav>
                        <Link to="/menu" className="link">
                            <IoIosArrowBack />
                            Menu
                        </Link>
                        <CartLink />
                    </nav>
                }
            >
                <h4>{ingredients.join(", ")}</h4>

                <Nutrients nutrients={nutrients} />

                <div className="prices-container">
                    {amount ? (
                        <div className="amount">
                            <NumInput
                                amount={amount}
                                min={0}
                                onChange={handleAmountChange}
                            />
                        </div>
                    ) : (
                        <Button onClick={() => handleAmountChange(1)}>
                            Add to cart
                        </Button>
                    )}

                    <div className="container">
                        {discountPercent && (
                            <div className="discount">{`-${discountPercent}%`}</div>
                        )}
                        <h4>$</h4>
                        <h3 className="price">
                            {getTotalPrice(
                                price,
                                discountPercent,
                                amount
                            ).toFixed(2)}
                        </h3>
                    </div>
                </div>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default ProductPage;
