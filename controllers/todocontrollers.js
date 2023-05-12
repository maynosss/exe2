const todomodel = require("../models/todomodel");
module.exports.getalltodo = async (req, res) => {
  const todos = await todomodel.find();
  res.send(todos);
};
module.exports.gettodobyid = async (req, res) => {
  const id = req.body._id;
  const todo = await todomodel.findById(id);
  res.send(todo);
};

module.exports.addtodo = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const isDone = req.body.isDone;
  todomodel
    .create({
      title,
      description,
      isDone,
    })
    .then((data) => {
      res.send(data);
    });
};

module.exports.edittodo = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const isDone = req.body.isDone;
  const id = req.body._id;
  todomodel
    .findByIdAndUpdate(id, {
      title,
      description,
      isDone,
    })
    .then((data) => {
      res.send(data);
    });
};

module.exports.deletetodobyid = async (req, res) => {
  const id = req.body._id;
  todomodel.findByIdAndDelete(id).then((data) => {
    res.send(data);
  });
};

module.exports.deletealltodo = async (req, res) => {
  todomodel.deleteMany().then((data) => {
    res.send(data);
  });
};
