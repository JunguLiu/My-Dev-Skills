const skills = require("../models/skill");

function index(req, res) {
  res.render("skills/show", { skills: skills.getAll() });
}

function create(req, res) {
  skills.create(req.body);
  res.redirect("/skills");
}

function one(req, res) {
  res.render("skills/one", { skill: skills.getOne(req.params.id) });
}

function deleteOne(req, res) {
  skills.deleteOne(req.params.id);
  console.log(skills.getAll());
  res.redirect("/skills");
}

module.exports = {
  index,
  create,
  one,
  deleteOne,
};
