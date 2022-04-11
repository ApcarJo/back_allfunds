
const router = require('express').Router();
const loginController = require('../controllers/loginController.js');
const userController = require('../controllers/userController.js');

// USER ROUTE FOR LOGIN

router.post('/', async (req, res) => {
    try {
        const mailCheck = req.body.email;
        const passwordCheck = req.body.password;
        let token = await loginController.validateUser(mailCheck, passwordCheck);
        let user = await userController.findByEmail(mailCheck);
        res.status(200).json({ token, user });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;
