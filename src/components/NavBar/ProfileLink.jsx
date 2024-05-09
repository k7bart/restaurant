import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// todo: fix behavior, make it smooth
const ProfileLink = () => {
    const userName = useSelector((state) => state.user.name);
    const defaultText = `Hello, ${userName}!`;
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
