import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductInCart } from "../../hooks/useProductInCart";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { menu } from "../../state";

import Amount from "./amount/Amount";
import Button from "../../components/buttons/button/Button";
import Carrousel from "../../components/carrousel/Carrousel";
import CartLink from "../../components/nav-bar/CartLink";
import ContentSection from "../../components/page-sructure/content-section/ContentSection";
import ContentSectionNav from "../../components/page-sructure/content-section/content-section-nav/ContentSectionNav";
import Cover from "../../components/half-page-cover/Cover";
import CustomLink from "../../components/links/custom-link/CustomLink";
import Discount from "./discount/Discount";
import Nutrients from "./nutrients/Nutrients";
import Price from "./price/Price";
import Section from "../../components/page-sructure/section/Section";
import TwoSectionsPage from "../../components/page-sructure/two-sections-page/TwoSectionsPage";

import styles from "./ProductPage.module.scss";

const Navigation = () => (
    <ContentSectionNav>
        <CustomLink to="/menu">
            <IoIosArrowBack />
            Menu
        </CustomLink>
        <CartLink />
    </ContentSectionNav>
);

const ProductPage = () => {
    const { category, productId } = useParams();

    const product = useMemo(() => {
        const categoryData = menu.find((c) => c.name === category);
        return categoryData?.dishes.find((d) => d.id === productId);
    }, [category, productId]);

    const { amount, handleAmountChange } = useProductInCart(product!);

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

    const getSlides = (photos: string[]): JSX.Element[] =>
        photos.map((photo, i) => (
            <Cover addFilter={false} backgroundImage={photo} key={i} />
        ));

    return (
        <TwoSectionsPage title={name}>
            <Section className={styles.cover}>
                {photos && <Carrousel content={getSlides(photos)} dots />}
            </Section>

            <ContentSection
                title={name}
                subtitle={description}
                navigation={<Navigation />}
            >
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

                <div className={styles.buttonsContainer}>
                    <Link to="/menu">
                        <Button color="tertiary">
                            <IoIosArrowBack />
                            Go to menu
                        </Button>
                    </Link>

                    <Link to="/cart">
                        <Button color="tertiary">
                            Go to cart
                            <IoIosArrowForward />
                        </Button>
                    </Link>
                </div>
            </ContentSection>
        </TwoSectionsPage>
    );
};

export default ProductPage;
