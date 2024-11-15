import Carrousel from "../../components/Carrousel/Carrousel";

const ProductCarrousel = ({ photos }) => {
    const props = {
        content: photos.map((photo, i) => (
            <div className="cover" key={i}>
                <img className="image" src={photo} />
            </div>
        )),
        dots: true,
    };

    return <Carrousel {...props} />;
};

export default ProductCarrousel;
