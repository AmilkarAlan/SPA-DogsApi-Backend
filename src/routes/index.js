const { Router } = require("express");
const user = require("./userRoutes");
const router = Router();

router
    .use('/user', user)

module.exports = router;