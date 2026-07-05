import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import CartLink from "./CartLink";
import ProfileLink from "./ProfileLink";

const LINKS = [
    { to: "/menu", text: "Menu" },
    { to: "/table-reservation", text: "Book a table" },
    { to: "/events", text: "Events" },
];

const NAV_LINKS = LINKS.map((link, i) => (
    <NavLink key={i} to={link.to}>
        {link.text}
    </NavLink>
));

const NavBar = ({ additionalStyles }: { additionalStyles?: string }) => {
    const user = useAppSelector((state) => state.user);

    return (
        <nav className={cn(additionalStyles, "navbar")} data-testid="navbar">
            {user ? (
                <ProfileLink name={user.firstName} />
            ) : (
                <NavLink to="/login">Login</NavLink>
            )}
            {NAV_LINKS}
            <CartLink />
        </nav>
    );
};

export default NavBar;
