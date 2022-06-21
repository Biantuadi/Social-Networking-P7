module.exports.signupErrors = (err) => {
    const errors = {pseudo: "", email: ""};

    if(err.message.includes("pseudo")) errors.pseudo = "Pseudo déjà utilisé";

    if(err.message.includes("email")) errors.email = "Email déjà utilisé";

    return errors;
}