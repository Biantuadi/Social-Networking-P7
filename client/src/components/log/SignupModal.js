import React from "react";
import axios from "axios";

const SignupModal = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignup = (e) => {};

  return (
    <main className="main__Auth">
      <h1>Inscription</h1>
      <form action="" onSubmit={handleSignup} id="signup-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </main>
  );
};

export default SignupModal;
