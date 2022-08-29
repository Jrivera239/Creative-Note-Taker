const router = require('express').Router();
const path = require ("path")

router.get("/notes",(req, res) => {
    res.sendFile(path.join(__dirname, "../publc//routes/htmlRoutes.js"))

});
router.get("*",(req,res) => {
    res.sendFile(path.join(__dirname, "../publc/routes/apiRoutes.js"))
})

module.exports = router