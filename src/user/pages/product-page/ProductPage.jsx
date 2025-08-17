import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { addProduct, updateProductAmount } from "../../../store/index";
import { menu } from "../../../state";
import Button from "../../../common/components/buttons/Button/Button";
import Carrousel from "../../components/carrousel/Carrousel";
import CartLink from "../../components/NavBar/CartLink";
import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import Cover from "../../components/half-page-cover/Cover";
import CoverSection from "../../components/page-sructure/CoverSection/CoverSection";
import Nutrients from "./nutrients/Nutrients";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";
import styles from "./ProductPage.module.scss";
import Amount from "./amount/Amount";
import Price from "./price/Price";
import ContentSectionNav from "../../components/page-sructure/ContentSection/ContentSectionNav/ContentSectionNav";
import LinkComponent from "../../components/links/LinkComponent/LinkComponent";
import Discount from "./discount/Discount";

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

    const slides = photos.map((photo, i) => (
        <Cover addFilter={false} backgroundImage={photo} key={i} />
    ));

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
        <TwoSectionsPage title={name} className={styles.productPage}>
            <CoverSection addLogo={false} addNavBar={false}>
                <Carrousel content={slides} dots />
            </CoverSection>

            <ContentSection
                header={{
                    title: name,
                    text: description,
                }}
            >
                <ContentSectionNav>
                    <LinkComponent to="/menu">
                        <IoIosArrowBack />
                        Menu
                    </LinkComponent>
                    <CartLink />
                </ContentSectionNav>

                <div className={styles.content}>
                    <h4>{ingredients.join(", ")}</h4>

                    <Nutrients nutrients={nutrients} />

                    <div className={styles.container}>
                        {amount ? (
                            <Amount
                                amount={amount}
                                onChange={handleAmountChange}
                            />
                        ) : (
                            <Button onClick={() => handleAmountChange(1)}>
                                Add to cart
                            </Button>
                        )}

                        <div className={styles.pricesContainer}>
                            {discountPercent && (
                                <Discount discountPercent={discountPercent} />
                            )}

                            <Price
                                amount={amount}
                                discountPercent={discountPercent}
                                price={price}
                            />
                        </div>
                    </div>
                </div>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default ProductPage;
