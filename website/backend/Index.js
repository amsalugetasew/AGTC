const express = require("express");
const session = require('express-session');
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
// app.use(session({
//   secret: "key that will sign cookie",
//   resave: false,
//   saveUninitialized: false,
// }));
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/signup"));
app.use(require("./routes/PostNews")) //,(req, res) =>{
  // req.session.isAuth = true;
  // console.log(req.session);
  // console.log(req.session.id)
  // res.send("Hello Sessions are u here?");
// });
app.use(require("./routes/users"));
// app.use(require("./routes/users"));
app.use(require("./routes/auth"));
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
// get driver connection
const dbo = require("./db/conn");
// const dbos = require("./db/database");
 // routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});