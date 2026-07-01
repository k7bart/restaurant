import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProfileLink = ({ name }: { name: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <NavLink
            to="/profile"
            className="profile"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? "Profile" : `Hello, ${name}!`}
        </NavLink>
    );
};

export default ProfileLink;
