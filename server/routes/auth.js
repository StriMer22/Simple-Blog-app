const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json("Wrong authorization!");
    const validatePass = await bcrypt.compare(req.body.password, user.password);
    if (!validatePass) return res.status(400).json("Wrong authorization!");
    const { password, ...othersInfo } = user._doc; //show user info without password
    res.status(200).json(othersInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
