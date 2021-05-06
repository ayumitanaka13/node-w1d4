const { v4: uuidv4 } = require("uuid");

let members = [
  {
    id: uuidv4(),
    name: "Nico",
    email: "nico@mail.com",
    status: "active",
  },
  {
    id: uuidv4(),
    name: "Ayumi",
    email: "ayumi@mail.com",
    status: "active",
  },
];

module.exports = members;
