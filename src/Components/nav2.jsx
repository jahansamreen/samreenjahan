import React, { useState } from "react";
import "./nav2.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}
function Navbar2({ page }) {
  const [showMenu, setShowMenu] = useState(false);
  // useEffect(() => {
  //   // Add the active class to the 1st <a> tag when the page loads
  //   document.querySelectorAll(".alink")[0].classList.add("active");
  // }, []);

  // function handleClick(e) {
  //   const allLinks = document.querySelectorAll(".alink");
  //   allLinks.forEach((link) => link.classList.remove("active"));
  //   e.target.classList.add("active");
  //   console.log(e);
  // }
  return (
    <>
      <div className="navv">
        <div className="nav-content">
          <div className="heading1">
            <CustomLink to="/" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Samreen Jahan
            </CustomLink>
          </div>
          <div className={showMenu ? "menu2 mobile-menu" : "menu2"}>
            <ul>
              <CustomLink to="/" className="alink">
                Home
              </CustomLink>
              <CustomLink to="/About" className="alink">
                About
              </CustomLink>
              <CustomLink to="/Resume" className="alink">
                Resume
              </CustomLink>
              <CustomLink to="/Projects" className="alink">
                Projects
              </CustomLink>
              <CustomLink to="/Contact" className="alink">
                Contact
              </CustomLink>
              {/* <li>
            <NavLink to="/" className="alink" onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="alink" onClick={handleClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Resume" className="alink" onClick={handleClick}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio" className="alink" onClick={handleClick}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="alink" onClick={handleClick}>
              Contact
            </NavLink>
          </li> */}
            </ul>
          </div>
          <div className="hamburger-menu">
            <NavLink to="#" onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu style={{ color: "white" }} size={24} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
