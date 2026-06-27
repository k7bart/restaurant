import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useProductInCart } from "../../../hooks/useProductInCart";
import { IoIosArrowBack } from "react-icons/io";
import { menu } from "../../../state";

import Amount from "./amount/Amount";
import Button from "../../../components/buttons/Button/Button";
import Carrousel from "../../components/carrousel/Carrousel";
import CartLink from "../../components/NavBar/CartLink";
import ContentSection from "../../components/page-sructure/ContentSection/ContentSection";
import ContentSectionNav from "../../components/page-sructure/ContentSection/ContentSectionNav/ContentSectionNav";
import Cover from "../../components/half-page-cover/Cover";
import CustomLink from "../../components/links/custom-link/CustomLink";
import Discount from "./discount/Discount";
import Nutrients from "./nutrients/Nutrients";
import Price from "./price/Price";
import Section from "../../components/page-sructure/Section/Section";
import TwoSectionsPage from "../../components/page-sructure/TwoSectionsPage/TwoSectionsPage";

import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { category, productId } = useParams();

    const product = useMemo(() => {
        const categoryData = menu.find((c) => c.name === category);
        return categoryData?.products.find((p) => p.id === productId);
    }, [category, productId]);

    if (!product) return;

    const {
        description,
        discountPercent,
        ingredients,
        name,
        nutrients,
        photos,
        price,
    } = product;

    const { amount, handleAmountChange } = useProductInCart(product, category);

    const getSlides = (photos: string[]): JSX.Element[] =>
        photos.map((photo, i) => (
            <Cover addFilter={false} backgroundImage={photo} key={i} />
        ));

    return (
        <TwoSectionsPage title={name}>
            <Section className={styles.cover}>
                {photos && <Carrousel content={getSlides(photos)} dots />}
            </Section>

            <ContentSection title={name} subtitle={description}>
                <ContentSectionNav>
                    <CustomLink to="/menu">
                        <IoIosArrowBack />
                        Menu
                    </CustomLink>
                    <CartLink />
                </ContentSectionNav>

                <div className={styles.content}>
                    <h4>{ingredients?.join(", ")}</h4>

                    {nutrients && <Nutrients nutrients={nutrients} />}

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
