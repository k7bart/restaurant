import { capitalize } from "../../../utils/stringUtils";
import ProductLink from "./ProductLink";

const Category = ({ category }) => {
    return (
        <div className="category" id={category.name}>
            <h3>{capitalize(category.name)}</h3>

            <div>
                {category.products.map((product) => (
                    <ProductLink
                        key={product.id}
                        product={product}
                        category={category.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Category;
