// // Register Route
// const router = require("express").Router();
// // const { User, validate } = require("../Model/User");
const bcrypt = require("bcrypt")
// var express=require("express");
// const recordRoutes = express.Router();
// const dbo = require("../db/conn");
// // recordRoutes.route("/users/add").post(function (req, res) {
// router.post("/users/add", async (req, res) => {
//   let db_connect = dbo.getDb();
//   try {
//     // const { error } = validate(req.body);
//     // var firstName = req.body.firstName;
//     //     var lastName =req.body.lastName;
//     //     var email =req.body.email;
//     //     var password =req.body.password;
//     //     let today = new Date();
//     //     var dateOfRegistartion = today;
//     //     const salt = await  bcrypt.genSalt(Number(process.env.SALT));
//     //     const hashPassword = await  bcrypt.hash(password, salt);
//     //     var data = {
//     //               "firstName": firstName,
//     //               "lastName":lastName,
//     //               "email": email,
//     //               "password":hashPassword,
//     //               "dateOfRegistartion": dateOfRegistartion
//     //           }
//     if (error)
//       return res.status(400).send({ message: error.details[0].message });
//       // const user = db_connect.findOne({ email: email })
//       const user = db_connect.collection("Users").findOne({email: email});
//     if (user)
//       return res.status(409).send({ message: "User with given email already exist!" });

//     // const salt =  bcrypt.genSalt(Number(process.env.SALT));
//     // const hashPassword =  bcrypt.hash(password, salt);
//     db_connect.collection("Users").insertOne(data, function (err, res) {
//             if (err) throw err;
//             response.json(res);
//             res.status(201).send({ message: "User created successfully" })
//           });  
//     //  new User({ data, password: hashPassword }).save();
//     // res.status(201).send({ message: "User created successfully" })

//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" })
//   }
// });
// // module.exports = recordRoutes;
// module.exports = router;


var express=require("express");
var bodyParser=require("body-parser");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
recordRoutes.route("/users/add").post(async function (req, response) {
    let db_connect = dbo.getDb();
    var firstName = req.body.firstName;
    var lastName =req.body.lastName;
    var email =req.body.email;
    var password =req.body.password;
    var Cpassword =req.body.Cpassword;
    var status ="Deactivate";
    let today = new Date();
    var dateOfRegistartion = today;
    const salt = await  bcrypt.genSalt(10);
    const hashPassword = await  bcrypt.hash(password, salt);
    const ChashPassword = await  bcrypt.hash(Cpassword, salt);
    var data = {
        "firstName": firstName,
        "lastName":lastName,
        "email": email,
        "password":hashPassword,
        "status": status,
        "dateOfRegistartion": dateOfRegistartion
    }
    if(hashPassword===ChashPassword)
    {
  const result = await db_connect.collection("Users").findOne({ email: email });
  // const result1 = await db_connect.collection("Users").findOne({ firstName: firstName });

    // if (result || result1) {
      if (result) {
        console.log(`Email already exist '${email}'`);

   
  } else {
    db_connect.collection("Users").insertOne(data, function (err, res) {
      if (err) throw err;
      response.json(res);
      console.log(`User registered with Email: '${email}'`);
    });
} }
else{
  console.log('not matched')
}
   });
module.exports = recordRoutes;