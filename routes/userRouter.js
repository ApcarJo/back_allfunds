
const router = require("express").Router();
const userController = require("../controllers/userController.js");

router.post("/",  async(req, res) => {
    try {
        const data = req.body;
        res.json(await userController.createUser(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;