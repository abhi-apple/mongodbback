const fs = require("fs");
const data = JSON.parse(fs.readFileSync("demo.json", "utf-8"));
const user = data.users;

exports.getall = (req, res) => {
  res.status(200).json(user);
};
exports.getuser = (req, res) => {
  const id = +req.params.id;
  const userind = user.find((p) => p.id === id);
  res.json(userind);
};
exports.createuser = (req, res) => {
  console.log(req.body);
  user.push(req.body);
  res.status(201).json(req.body);
};

exports.override = (req, res) => {
  const id = +req.params.id;
  const userind = user.findIndex((p) => p.id === id);
  user.splice(userind, 1, {
    ...req.body,
    id: id,
  });
  console.log(user);
  res.status(200).json(user);
};

exports.patchuser = (req, res) => {
  const id = +req.params.id;
  const userind = user.findIndex((p) => p.id === id);
  console.log(userind);
  const prevuser = user[userind];
  user.splice(userind, 1, { ...prevuser, ...req.body });
  res.sendStatus(200);
};
exports.deleteuser = (req, res) => {
  const id = +req.params.id;
  const userind = user.findIndex((p) => p.id === id);
  user.splice(userind, 1);
  res.sendStatus(200);
};
