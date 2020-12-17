import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../componentsV2/UI/button";

// custom hooks
import { useStateForm, useLogin, useSnackbar } from "../../hooks";

const initialFormState = {
  username: "",
  password: "",
};

const LogIn = () => {
  const history = useHistory();
  const { displaySnackbar } = useSnackbar();

  // form state manager
  const { formState, onChange, resetForm } = useStateForm(initialFormState);

  // manage submit
  const { onSubmit } = useLogin(
    formState,
    () => {
      resetForm();
      displaySnackbar("success", "Bienvenido!");
      history.push("/");
    },
    () => {
      displaySnackbar("error", "Por favor revisa los datos ingresados");
    }
  );

  return (
    <section className="log-in-section">
      <div className="card-login">
        <header>
          <p>Iniciar sesión</p>
        </header>

        <form onSubmit={onSubmit}>
          <div className="body">
            <input type="hidden" value="password" />
            <p>Nombre de usuario</p>
            <input
              name="username"
              placeholder="nombre de usuario..."
              value={formState.username}
              onChange={onChange}
            />
            <p>Contraseña</p>
            <input
              name="password"
              type="password"
              placeholder="contraseña..."
              value={formState.password}
              onChange={onChange}
            />
          </div>
          <div className="footer">
            <Button lbl="Iniciar sesión" type="submit" />
            <a onClick={() => history.push("/registration")}>
              Aún no tienes cuenta?, Registrate
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
