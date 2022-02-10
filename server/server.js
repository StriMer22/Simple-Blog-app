const express = require("express");
const app = express();
const moongoDB = require("./config/mongo");
const path = require("path");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const uploadRoute = require("./routes/upload");

app.use(express.json());
moongoDB();

app.use("/pictures", express.static(path.join(__dirname, "/pictures")));

app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);
app.use("/server/posts", postRoute);
app.use("/server/categories", categoryRoute);
app.use("/server/upload", uploadRoute);

app.listen(process.env.PORT, () => {
  console.log("server is running!");
});
