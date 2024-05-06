import Carrousel from "../Carrousel/Carrousel";

const ProductCarrousel = ({ product }) => {
    const photos = product.photos.map((photo, i) => (
        <div className="cover" key={i}>
            <img className="image" src={photo} />
        </div>
    ));

    const props = {
        content: photos,
        num: 1,
        dots: true,
        slideShow: false,
    };

    <Carrousel {...props} />;
};

export default ProductCarrousel;
