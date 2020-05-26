const express = require("express");
const router = express.Router();

const User = require("../models/User");

//@route  POST /user/register
//@desc   Add an user to database
//@access Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      newUser
        .save()
        .then((user) => {
          return res.json(user);
        })
        .catch((err) => {
          return res.status(400).json({ error: err });
        });
    }
  });
});

//@route  POST /user/login
//@desc   Log in a user
//@access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then((user) => {
    if (user) {
      if (password === user.password) {
        return res.json(user);
      } else {
        return res.status(404).json({ error: "Incorrect email or password" });
      }
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  });
});

//@route  GET /user/all-users
//@desc   Get all user's
//@access for admin
router.get("/all-users", (req, res) => {
  User.find()
    .then((users) => {
      if (users) {
        return res.json(users);
      }
      return res.json({ error: "error occured" });
    })
    .catch((err) => res.status(404).json(err));
});

//@route  POST user/register-admin
//@desc   Add an admin
//@access not available directly
router.post("/register-admin", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      const newAdmin = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: true,
      });

      newAdmin
        .save()
        .then((user) => {
          return res.json(user);
        })
        .catch((err) => {
          return res.status(400).json({ error: err });
        });
    }
  });
});

//@route  POST user/add-user-role
//@desc   Add a role to the user
//@access for admin
router.post("/add-user-role", (req, res) => {
  User.findOne({ _id: req.body.id })
    .then(user => {
      console.log(req.body.roles, req.body.roles.length);
      user.roles = req.body.roles;

      user.save().then(() => {
        return res.json({ success: true });
      }).catch(err => res.json({ error: err}));
    })
    .catch((err) => res.json({ error: err }));
});

//@route  DELETE user/delete-user
//@desc   Delete a user from database
//@access for admin
router.delete("/delete-user", (req, res) => {
  User.findOneAndRemove({ email: req.body.email })
    .then(() => {
      //deleting user from database
      return res.json({ success: true });
    })
    .catch((err) => {
      return res.json({ error: err });
    });
});

module.exports = router;
