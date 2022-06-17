import React from "react";
import axios from "axios";

const LoginModal = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "POST",
      url: `http://localhost:3000/api/auth/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (res.data.success) {
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response.data.email) {
          emailError.innerHTML = err.response.data.email;
          passwordError.innerHTML = "";
        } else if (err.response.data.password) {
            emailError.innerHTML = "";
          passwordError.innerHTML = err.response.data.password;
        } 
      });
  };

  return (
    <main>
      <h1>Connexion</h1>
      <form
        action=""
        onSubmit={handleLogin}
        id="Login-form"
        className="form__auth"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="email error"></div>

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="password error"></div>
        <br />

        <input type="submit" value="Se connecter" className="btn-auth" />
      </form>
    </main>
  );
};

export default LoginModal;
