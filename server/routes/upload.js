const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "pictures");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

router.route("/").post(upload.single("file"), function (req, res) {
  res.status(200).json("File has been uploaded");
});

module.exports = router;
