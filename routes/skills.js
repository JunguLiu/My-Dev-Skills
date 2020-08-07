const express = require("express");
const router = express();
const skillsRender = require("../controller/skill");

router.get("/", skillsRender.index);
router.post("/", skillsRender.create);

router.get("/:id", skillsRender.one);

router.delete("/:id", skillsRender.deleteOne);

module.exports = router;
