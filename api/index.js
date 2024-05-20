const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("../DB/dbConnection");
const cors = require("cors");
const userRoutes = require("../routes/user.route");
const cookieParser = require("cookie-parser");
const verifyToken = require("../middleware/verifyToken");
const threadRoutes = require("../routes/thread.route");
const postRoutes = require("../routes/post.route");

// dbConnection();

// const corsOptions = {
//   origin: "https://frontend-beta-jade-56.vercel.app",
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(cookieParser());

app.get("/",(req,res) => {
  res.send("hello")
})
// app.use("/api/auth", userRoutes);
// app.use("/api/thread", verifyToken, threadRoutes);
// app.use("/api/post", verifyToken, postRoutes);

// app.listen(process.env.PORT, () => {
//   console.log(`App listening on port ${process.env.PORT}`);
// });

module.exports = app;
