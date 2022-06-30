// Login Route 
const router = require("express").Router();
var express=require("express");
// const { User } = require("../model/User");
const Joi = require("joi");
const bcrypt = require("bcrypt")
const recordRoutes = express.Router();
const dbo = require("../db/conn");
recordRoutes.route("/auth").post(async function (req, res) {
  
// router.post("/auth", async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    var email =req.body.email;
    var passwords =req.body.password;
    const salt = await  bcrypt.genSalt(Number(process.env.SALT));
    var hashPasswords = await  bcrypt.hash(passwords, salt);
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
      const user = await db_connect.collection("Users").findOne({ email: email });
      const result1 = await db_connect.collection("Users").findOne({ password: passwords });
      // var dbpassword= await bcrypt.genSalt(Number(process.env.SALT));
      // if(hashPasswords===user.password)
      // {
      //   console.log('matched')
      //   console.log(user.password)
      // }
      // else{
      //   console.log('not match')
      //   console.log(hashPasswords)
      //   console.log(user.password)
      // }
    // if (user || result1) 
    // if (result1)
    // {
    //   console.log('first')
    // }
    // else{
    //   console.log('nop')
    // }
    if (user)
    {
      // console.log(hashPasswords)
      // console.log(user.password)
      // console.log(user.status)

      

      var status = user.status;
    const validPassword = await bcrypt.compare(
      passwords, user.password
    );
    // if (!validPassword)
    if (!passwords===passwords)
      return res.status(401).send({ message: "Invalid Email or Password" });
      else{
        if(status!=='Activate')
        {
          return res.status(401).send({ message: "Status should be Active" });
        }
        else{
        res.status(200).send({ data: user, message: "Logged in successfully" })
      }
    }

    // const token = await user.generateAuthToken();
    // res.status(200).send({ data: token, message: "Logged in successfully" })
    }
    else
      return res.status(401).send({ message: "Invalid Email or Password" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password")
  });
  return schema.validate(data);
}

module.exports = recordRoutes;
// module.exports = router;