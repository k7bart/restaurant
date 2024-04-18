import MenuItem from "../MenuCategoryItem/MenuCategoryItem";
import "./MenuCategory.scss";

const MenuCategory = ({ index, category }) => {
    return (
        <div className="menu-page__menu-category" id={category.name}>
            <h3>{category.name}</h3>
            <div>
                {category.dishes.map((dish) => (
                    <MenuItem key={dish} dish={dish} />
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;
