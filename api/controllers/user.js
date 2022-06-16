const User = require('../models/user');
const bcrypt = require('bcrypt');


exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash =>{
        const user = new User({ 
            email: req.body.email,
            password: hash
        })
        user.save()
        .then((res) => res.status(201).json({message: 'Utilisateur créé !'}))
        .catch(err => res.status(400).json({error: err}))
    })
    .catch(err => res.status(500).json({error: err}))

} 