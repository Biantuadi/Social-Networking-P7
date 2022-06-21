import React from "react";
import axios, { Axios } from "axios";

const SignupModal = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: `http://localhost:3000/api/user/signup`,
      withCredentials: true,
      data : {
        name : name,
        email: email,
        password: password,
      }
    })
    .then((res) =>{ console.log(res);})


  };

  return (
    <div>
      <h1>Sign up</h1>
      <br />
      <form
        action=""
        onSubmit={handleSignup}
        id="signup-form"
        className="form__auth"
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />

        <button type="submit" className="btn-auth">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupModal;
