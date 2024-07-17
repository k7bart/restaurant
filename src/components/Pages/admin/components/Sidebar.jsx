import { NavLink } from "react-router-dom";
import {
    MdTableRestaurant,
    MdDeliveryDining,
    MdMenuBook,
} from "react-icons/md";

const Sidebar = () => {
    return (
        <aside>
            <NavLink to="/admin/dashboard">
                <div>
                    <span className="avatar" role="img" aria-label="Chick">
                        🐥
                    </span>
                    <span>Kate</span>
                </div>
            </NavLink>

            <NavLink to="/admin/reservations">
                <div>
                    <MdTableRestaurant />
                    <span>Reservations</span>
                </div>
            </NavLink>

            <NavLink to="/admin/orders">
                <div>
                    <MdDeliveryDining />
                    <span>Orders</span>
                </div>
            </NavLink>

            <NavLink to="/admin/menu">
                <div>
                    <MdMenuBook />
                    <span>Menu</span>
                </div>
            </NavLink>

            <div className="filler"></div>
        </aside>
    );
};

export default Sidebar;
