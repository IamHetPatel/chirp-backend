const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config();
mongoose
  .connect("mongodb://127.0.0.1:27017/chirp", { useNewUrlParser: true })
  .then(() => console.log("connection successful...."))
  .catch((err) => console.log(err));

  //middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);


app.listen(PORT, () => {
  console.log(`server is listerning to port ${PORT}`);
});