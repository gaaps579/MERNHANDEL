import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.scss";

import Button from "../../UI/button";
import { deleteUserData } from "../../../actions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOff = () => {
    dispatch(deleteUserData());
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <div className="user-profile">
      <div className="user-info-container">
        <Button handleClick={logOff} lbl="Salir" />
        <p>Perfil de usuario...</p>
        <p>
          Muy pronto... <i className="fas fa-tools"></i>
        </p>
      </div>
    </div>
  );
};
export default UserProfile;
