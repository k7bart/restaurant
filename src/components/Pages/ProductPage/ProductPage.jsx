import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";

import { addProduct, updateProductAmount } from "../../../store/index";
import { menu } from "../../../state";

import ContentSection from "../../ContentSection";
import CoverSection from "../../CoverSection";
import NumInput from "../../Inputs/NumInput/NumInput";
import Nutrients from "./Nutrients";
import ProductCarrousel from "./ProductCarrousel";
import TwoSectionsPage from "../../TwoSectionsPage";

const ProductPage = () => {
    const { category } = useParams();
    const { productId } = useParams();
    const product = menu
        .find((c) => c.name === category)
        .products.find((p) => p.id === productId);

    // amount
    const [amount, setAmount] = useState(1);
    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
    };

    // store
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const handleAddProduct = () => {
        const productInCart = cart.find((product) => product.id === productId);

        if (productInCart) {
            const newAmount = productInCart.amount + amount;
            dispatch(
                updateProductAmount({ productId: productInCart.id, newAmount })
            );
            return;
        }

        dispatch(addProduct({ ...product, amount, category }));
    };

    // totalPrice
    const [totalPrice, setTotalPrice] = useState(product.price);
    useEffect(() => {
        setTotalPrice(product.price * amount);
    }, [product.price, amount]);

    return (
        <TwoSectionsPage title={product.name} className="product-page">
            <CoverSection addLogo={false} addNavBar={false}>
                <ProductCarrousel photos={product.photos} />
            </CoverSection>

            <ContentSection
                header={{
                    title: product.name,
                    text: product.description,
                }}
                nav={
                    <Link to="/menu" className="link">
                        <IoIosArrowBack />
                        Menu
                    </Link>
                }
            >
                <h4>{product.ingredients.join(", ")}</h4>

                <Nutrients nutrients={product.nutrients} />

                <div className="prices-container">
                    <div className="container">
                        <h4>Amount:</h4>
                        <NumInput
                            amount={amount}
                            onChange={handleAmountChange}
                        />
                    </div>
                    <div className="container">
                        <h4>Total: $</h4>
                        <h3 className="price">{totalPrice}</h3>
                    </div>
                </div>

                <button className="small color" onClick={handleAddProduct}>
                    Add to cart
                </button>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default ProductPage;
