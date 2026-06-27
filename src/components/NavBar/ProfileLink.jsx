import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProfileLink = ({ name }) => {
    const defaultText = `Hello, ${name}!`;
    const hoverText = "Profile";

    const [isHovered, setIsHovered] = useState(false);

    return (
        <NavLink
            to="/profile"
            className="profile"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? hoverText : defaultText}
        </NavLink>
    );
};

export default ProfileLink;
