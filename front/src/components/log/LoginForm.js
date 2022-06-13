import React from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        axios.get('http://localhost:5000/api/auth/login')

    }
    return (
        <form action='' onSubmit={handleLogin} id="loginForm">
            <h1>Connectez-vous !</h1>

            <br />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="champ"/>
            <div className="emailError"></div>
            <br />

            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="champ"/>
            <div className="passwordError"></div>
            <br />
            <br />

            <input type="submit" value="Se connecter" class="btnConection" />
        </form>
    );
};

export default LoginForm;