const express = require("express");
const {
  getAllMember,
  getMember,
  createMember,
  updateMember,
  deleteMember,
} = require("../controllers/members.controller");
const router = express.Router();
const members = require("../model/Member");

// get all members
router.get("/", getAllMember);

// get one member
router.get("/:id", getMember);

// create a member
router.post("/post", createMember);

// update a member
router.put("/update/:id", updateMember);

// delete a member
router.delete("/delete/:id", deleteMember);

module.exports = router;
