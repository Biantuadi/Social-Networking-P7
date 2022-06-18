import React from "react";
import axios, { Axios } from "axios";

const SignupModal = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: `http://localhost:3000/api/auth/signup`,
      withCredentials: true,
      data : {
        email: email,
        password: password,
      }
    })
    .then((res) =>{ console.log(res);})


  };

  return (
    <main className="main__Auth">
      <h1>Inscription</h1>
      <form
        action=""
        onSubmit={handleSignup}
        id="signup-form"
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
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" className="btn-auth">
          S'inscrire
        </button>
      </form>
    </main>
  );
};

export default SignupModal;
