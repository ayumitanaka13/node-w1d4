const { v4: uuidv4 } = require("uuid");
const members = require("../model/Member");

exports.getAllMember = (req, res, next) => {
  res.json(members);
};

exports.getMember = (req, res, next) => {
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
};

exports.createMember = (req, res, next) => {
  const newMember = {
    id: uuid4(),
    status: "active",
    ...req.body,
    // name: req.body.name,
    // email: req.body.email,
  };
  members.push(newMember);
  res.redirect("/");
};

exports.updateMember = (req, res, next) => {
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

  exports.deleteMember = (req, res, next) => {
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
  };
};
