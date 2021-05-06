const express = require("express");
const router = express.Router();
const members = require("../model/Member");

// get all members
router.get("/", (req, res, next) => {
  res.json(members);
});

// get one member
router.get("/:id", (req, res, next) => {
  const found = members.some((member) => member.id === req.params.id);
  if (found) {
    res.json(
      members.filter((member) => {
        return member.id === req.params.id;
      })
    );
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// create a member
router.post("/post", (req, res, next) => {
  const newMember = {
    id: uuid4(),
    status: "active",
    ...req.body,
    // name: req.body.name,
    // email: req.body.email,
  };
  members.push(newMember);
  res.redirect("/");
});

// update a member
router.put("/update/:id", (req, res, next) => {
  const found = members.some((member) => member.id === req.params.id);
  if (found) {
    const updatedMember = members.map((member) => {
      if (member.id === req.params.id) {
        return {
          ...member,
          ...req.body,
        };
      }
      return member;
    });
    res.json({ msg: `Updated ${updatedMember}` });
  } else {
    res.status(400).json({
      msg: `Unable to update with member with the id of ${req.params.id}`,
    });
  }
});

// delete a member
router.delete("/delete/:id", (req, res, next) => {
  const found = members.some((member) => member.id === req.params.id);
  if (found) {
    res.json({
      msg: "Deleted",
      member: members.filter((member) => member.id !== req.params.id),
    });
  } else {
    res
      .status(400)
      .json({ msg: `No with member with the id of ${req.params.id}` });
  }
});

module.exports = router;
