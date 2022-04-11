
const userController = require('./userController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "to the moon";

class LoginController {

    async validateUser(mailCheck,passwordCheck){
        
        let user = await userController.findByEmail(mailCheck);
        if (user == null){
            throw new Error('Wrong user or password');
        }
        let password = user.password;
        let verify = await bcrypt.compare(passwordCheck, password);

        if(!verify){
            throw new Error('Wrong user or password');
        }

        let payload = {
            userId : user.id,
            createdAt: new Date,
        };

        return jwt.sign(payload, secret);
    }
}

const loginController = new LoginController();
module.exports = loginController;