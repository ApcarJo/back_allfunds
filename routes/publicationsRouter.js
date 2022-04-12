
const router = require("express").Router();
const publicationController = require("../controllers/publicationController.js");
const authUser = require("../middleware/authUser.js");


router.get('/', async(req, res) => {
    try {
        res.json(await publicationController.findAllActivePublications())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


router.post('/', async(req, res) => {
    try {
        const publication = req.body;
        res.json(await publicationController.createPublication(publication))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


router.get('/archived', async(req, res) => {
    try {
        res.json(await publicationController.showArchived())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.put('/', async (req, res) => {
    try{
        const bodyData = req.body;
        res.json(await publicationController.updatePublication(bodyData)); 
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

router.delete('/', async (req, res) => {
    try {
        const id = req.body.id;
        res.json(await publicationController.deletePublication(id));
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


module.exports = router;