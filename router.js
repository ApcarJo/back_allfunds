
const router = require('express').Router();

const publicationsRouter = require('./routes/publicationsRouter.js');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');

router.use('/publications', publicationsRouter);
router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;