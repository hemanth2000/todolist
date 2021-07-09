const { render } = require("ejs");
const Task = require("../models/task");

module.exports.home = (req, res) => {
  Task.find({}, (err, pendingtasks) => {
    if (err) {
      console.log("Error reading the files!");
      return;
    }

    return res.render("home", {
      title: "To-Do List",
      pendingtasks,
    });
  });
};
module.exports.create = (req, res) => {
  console.log(req.body);
  Task.create(req.body);
  return res.redirect("back");
};

module.exports.delete = (req, res, next) => {
  const ids = [];

  for (let id of Object.keys(req.body)) {
    ids.push(req.body[id]);
  }

  const query = { _id: { $in: ids } };

  Task.deleteMany(query, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(200).json({});
    }
  });

  // for (let id of Object.keys(req.body)) {
  //   Task.findByIdAndDelete(req.body[id], (err) => {
  //     if (err) {
  //       console.log("Error in deleting document!");
  //     } else {
  //       console.log("redirection");
  //     }
  //   });
  // }
};
