const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(require("./routes/signup"));
app.use(require("./routes/PostNews"));
app.use(require("./routes/users"));
// app.use(require("./routes/users"));
app.use(require("./routes/auth"));
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
// get driver connection
const dbo = require("./db/conn");
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