const { v4: uuidv4 } = require("uuid");
const members = require("../model/Member");

exports.getAllMembers = (req, res, next) => {
  res.json(members);
};

exports.getOneMember = (req, res, next) => {
  const found = members.some((member) => member.id === req.params.id);

  console.log(found);

  if (found) {
    res.json(
      members.filter((member) => {
        console.log("paramsID: ", req.params.id);
        console.log("memberID: ", member.id);
        return member.id === req.params.id;
      })
    );
  } else {
    //400 = Bad Request
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};

exports.createMember = (req, res, next) => {
  const newMember = {
    id: uuidv4(),
    status: "active",
    ...req.body,
  };
  // console.log(newMember)
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
    res.json({ msg: "Member updated", updatedMember });
  } else {
    res
      .status(400)
      .json({ msg: `Unable to update with member of id: ${req.params.id}` });
  }
};

exports.deleteMember = (req, res, next) => {
  const found = members.some((member) => member.id === req.params.id);

  if (found) {
    //deleting logic......

    res.json({
      msg: "Member deleted successfully",
      member: members.filter((member) => member.id !== req.params.id),
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
};
