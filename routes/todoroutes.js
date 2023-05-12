const express = require("express");
const {
  getalltodo,
  gettodobyid,
  addtodo,
  edittodo,
  deletetodobyid,
  deletealltodo,
} = require("../controllers/todocontrollers");

const router = express.Router();

router.get("/", getalltodo);
router.get("/todo", gettodobyid);
router.post("/add", addtodo);
router.patch("/edit", edittodo);
router.delete("/todo", deletetodobyid);
router.delete("/", deletealltodo);

module.exports = router;
