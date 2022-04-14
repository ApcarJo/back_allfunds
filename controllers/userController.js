
const bcrypt = require("bcrypt");
const User = require("../models/user.js");


class Trader {
    constructor() {

    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return User.create(user);
    }

    async findByEmail(email) {
        return User.findOne(
            { email: email }
        )
    }
}

let userController = new Trader();
module.exports = userController;