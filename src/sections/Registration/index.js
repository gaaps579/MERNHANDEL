import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

// custom hooks
import {
  useStateForm,
  useSnackbar,
  useValidateUsername,
  useRegistration,
} from "../../hooks";
import Button from "../../componentsV2/UI/button";

const initialFormState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};

const Registration = () => {
  const history = useHistory(); // hook for manage react router

  // hook for manage form state
  const { formState, onChange, resetForm } = useStateForm(initialFormState);

  // display func parameters: type snackbar and label
  const { displaySnackbar, hideSnackbar } = useSnackbar();

  // hook paramaters: handleUsernameAvailable, handleUsernameTaken
  const {
    handleValidateUsername, // func to trigger the validation
    statusUsernameAvailable, // return current status of validation
  } = useValidateUsername(hideSnackbar, () => {
    displaySnackbar("error", "Nombre de usuario ya existente!");
  });

  // formState, handleSuccess, handleRailure
  const { onSubmit } = useRegistration(
    formState, // this is a reference type
    () => {
      resetForm();
      displaySnackbar("success", "Usuario registrado correctamente!");
      history.push("/"); // move to main page
    },
    () => {
      displaySnackbar("error", "Error al registrar :(");
    }
  );

  return (
    <section className="registration-section">
      <div className="card-login">
        <header>
          <p>Formulario de Registro</p>
        </header>

        <form onSubmit={onSubmit}>
          <div className="body">
            <input type="hidden" value="password" />
            <p>Nombre</p>
            <input
              name="firstName"
              placeholder="nombre o nombres..."
              value={formState.firstName}
              onChange={onChange}
            />
            <p>Apellidos</p>
            <input
              name="lastName"
              placeholder="apellido o apellidos..."
              value={formState.lastName}
              onChange={onChange}
            />

            <p>Nombre de Usuario</p>
            <input
              name="username"
              placeholder="nombre de usuario..."
              className={`${
                statusUsernameAvailable === false
                  ? "usernameTaken"
                  : statusUsernameAvailable === true && "usernameAvailable"
              }`}
              value={formState.username}
              onChange={onChange}
              onBlur={handleValidateUsername}
              autoComplete="new-password"
            />

            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="contraseña..."
              value={formState.password}
              onChange={onChange}
              autoComplete="new-password"
            />
          </div>
          <div className="footer">
            <Button lbl="Registrarse" type="submit" />
            <a onClick={() => history.push("/login")}>Ya tienes una cuenta?</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
