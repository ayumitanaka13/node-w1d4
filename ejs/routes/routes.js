const express = require("express");
const membersController = require("../controllers/members.controller");

const router = express.Router();

//Get ALL members
router.get("/", membersController.getAllMembers);

//Get ONE member
router.get("/:id", membersController.getOneMember);

//Create a member
router.post("/post", membersController.createMember);

//Update a member
router.put("/update/:id", membersController.updateMember);

//Delete a member
router.delete("/delete/:id", membersController.deleteMember);

module.exports = router;
