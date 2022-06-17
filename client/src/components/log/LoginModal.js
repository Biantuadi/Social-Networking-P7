import React from "react";
import axios from "axios";

const LoginModal = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {};

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

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input type="submit" value="Se connecter" className="btn-auth" />
      </form>
    </main>
  );
};

export default LoginModal;
