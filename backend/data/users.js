import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: "Eazdin User",
    email: "eazdin@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: "Habte User",
    email: "habte@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  }
];

export default users;
