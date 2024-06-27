import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";

import { addProduct, updateProductAmount } from "../../../store/index";
import { menu } from "../../../state";

import CartLink from "../../NavBar/CartLink";
import ContentSection from "../../ContentSection";
import CoverSection from "../../CoverSection";
import NumInput from "../../Inputs/NumInput/NumInput";
import Nutrients from "./Nutrients";
import ProductCarrousel from "./ProductCarrousel";
import TwoSectionsPage from "../../TwoSectionsPage";

const ProductPage = () => {
    const { category, productId } = useParams();

    const product = useMemo(() => {
        return menu
            .find((c) => c.name === category)
            .products.find((p) => p.id === productId);
    }, [category, productId]);

    const { name, photos, description, ingredients, nutrients, price } =
        product;

    // store
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    // amount
    const productInCart = useMemo(() => {
        return cart.find((product) => product.id === productId);
    }, [cart, productId]);

    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(productInCart ? productInCart.amount : 0);
    }, [productInCart]);

    const handleAmountChange = (newAmount) => {
        if (productInCart) {
            dispatch(updateProductAmount({ productId: product.id, newAmount }));
            return;
        }

        dispatch(addProduct({ ...product, amount: newAmount, category }));
    };

    return (
        <TwoSectionsPage title={name} className="product-page">
            <CoverSection addLogo={false} addNavBar={false}>
                <ProductCarrousel photos={photos} />
            </CoverSection>

            <ContentSection
                // headerTitle={name}
                // headerText={description}
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
                                onChange={handleAmountChange}
                            />
                        </div>
                    ) : (
                        <button
                            className="small color"
                            onClick={() => handleAmountChange(1)}
                        >
                            Add to cart
                        </button>
                    )}

                    <div className="container">
                        <h4>$</h4>
                        <h3 className="price">{price}</h3>
                    </div>
                </div>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default ProductPage;
