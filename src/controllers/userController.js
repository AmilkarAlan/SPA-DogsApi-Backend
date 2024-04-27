const {User} = require("../db");
const bcrypt = require('bcrypt');

const newUserController = async (req, res) => {
    const { username, first_name, last_name, email, password } = req.body;


const saltRounds = 10
const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        first_name,
        last_name,
        email,
        passwordHash
    })
    const savedUser = await user.save()
    res.send(savedUser)
}

module.exports = {
    newUserController
}