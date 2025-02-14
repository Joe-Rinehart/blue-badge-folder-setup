const router = require("express").Router();
const User = require("../db").import("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


router.post('/register', function(req,res) {
    User.create({
        username: req.body.username,
        passwordHash: bcrypt.hashSync(req.body.passwordHash, 13)
    })
    .then (function createSuccess(user) {
        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
        res.json({
            user: user,
            message: 'User successfully created!',
            sessionToken: token,
        });
    })
    .catch(function(err) {
        res.status(500).json({error: err})
    })
})

router.post("/login", function (req, res) {
    console.log(process.env.JWT_SECRET)
    User.findOne({
      where: {
        username: req.body.username,
      },
    })
      .then(function loginSuccess(user) {
        if (user) {
          bcrypt.compare(req.body.passwordHash, user.passwordHash, function (err, matches) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
              res.status(200).json({
                user: user,
                message: "user successfully logged in!",
                sessionToken: token,
              });
            } else {
              res.status(502).json({ error: "Login Failed" });
            }
          });
        } else {
          res.status(500).json({ error: "User does not exist" });
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
   });


module.exports = router;