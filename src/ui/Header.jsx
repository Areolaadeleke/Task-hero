import { HiMenu } from "react-icons/hi";
import Search from "./Search";
import { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

function Header({ setIsOpen, isOpen }) {
  const [showDropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log("Error logging out");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log("unexpected error", err);
    }
  };

  return (
    <div className="header">
      <h2 onClick={() => setIsOpen(!isOpen)} className={isOpen ? "active" : ""}>
        <HiMenu />
      </h2>
      <Search />
      <div className="header-div" onClick={() => setDropdown(!showDropdown)}>
        <div className="pic-profile">
          <img src="IMG_1119.HEIC" alt="IMG_1119" />
        </div>

        {showDropdown && (
          <div className="drop-menu">
            <div className="user-info">
              <h2>Adeleke</h2>
              <p>Web Developer</p>
            </div>

            <ul>
              <li>My Profile</li>
              <li>Account Settings</li>
              <li>Need Help</li>
              <li onClick={handleOut}>Sign Out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
