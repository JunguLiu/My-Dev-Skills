const skills = [
  { id: 1, skill: "last breath" },
  { id: 2, skill: "death mark" },
  { id: 3, skill: "fate sealed" },
];
let id = 3;

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[skills.findIndex((i) => i.id == id)];
}

function create(obj) {
  let skill = {};
  id++;
  skill.id = id;
  skill.skill = obj.skill;
  skills.push(skill);
}

function deleteOne(id) {
  skills.splice(
    skills.findIndex((i) => i.id == id),
    1
  );
}
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
