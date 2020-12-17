import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";
import { useLogOff } from "../../../hooks";
import { PostFormBtn } from "./PostFormBtn";

const Navbar = () => {
  // manage sidenav width
  const [sidenavWidth, setSidenavWidth] = useState();
  const showSidebar = () => {
    setSidenavWidth({ width: "250px" });
  };
  const hideSidebar = () => {
    setSidenavWidth({ width: "0px" });
  };

  // for display username on navbar
  const username = useSelector((state) => state.userInfo.username);

  // tracking if we are in post section to display btn to show post form
  // when the component appears, it dispatch this bool on redux store
  const postSectionStatus = useSelector(
    (state) => state.posts.postSectionVisible
  );

  // log off hook
  const { logOff } = useLogOff();

  return (
    <div id="navbar">
      <span className="hamburguer-btn" onClick={showSidebar}>
        &#9776;
      </span>

      <Link to="/user-profile">
        <span className="username-mobile">{username}</span>
      </Link>

      {postSectionStatus && username !== "not logged" && <PostFormBtn />}

      <div style={sidenavWidth} className="sidenav" onClick={hideSidebar}>
        <a className="close-btn" onClick={hideSidebar}>
          &times;
        </a>

        <Link to="/">
          <i className="fas fa-layer-group"></i>
          Todos los análisis
        </Link>

        {username === "not logged" || username === "" ? (
          <>
            <Link to="/registration">Registrarse</Link>
            <Link to="/login">Ingresar</Link>
          </>
        ) : (
          <>
            <Link to="/MyPublications">
              <i className="fas fa-chalkboard-teacher"></i> Mis análsis
            </Link>

            <a className="log-off-btn" onClick={logOff}>
              <i className="fas fa-sign-out-alt"></i>
              Salir
            </a>

            <Link to="/user-profile">
              <span className="username-desktop">{username}</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
