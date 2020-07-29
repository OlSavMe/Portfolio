// const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");

// dotenv.config();

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     type: "OAuth2",
//     user: "user@example.com",
//     clientId: "000000000000-xxx0.apps.googleusercontent.com",
//     clientSecret: "XxxxxXXxX0xxxxxxxx0XXxX0",
//     refreshToken: "1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx",
//     accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x",
//     expires: 1484314697598,
//   },
// });

// module.exports = transporter;

// const path = require("path");
// const express = require("express");
// const app = express();
// const transporter = require("./config");

// const dotenv = require("dotenv");
// dotenv.config();

// const buildPath = path.join(__dirname, "..", "build");
// app.use(express.json());
// app.use(express.static(buildPath));

// app.post("/send", (req, res) => {
//   const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name: ${req.body.name}</li>

//       <li>Email: ${req.body.email}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;

//   try {
//     const mailOptions = {
//       from: req.body.email,
//       to: process.env.email,
//       name: req.body.name,
//       html: output,
//     };

//     transporter.sendMail(mailOptions, function (err, info) {
//       if (err) {
//         res.status(500).send({
//           success: false,
//           message: "Up! Something went wrong. Try again later",
//         });
//       } else {
//         res.send({
//           success: true,
//           message: "Thank you for contacting me!",
//         });
//       }
//     });
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: "Up! Something went wrong. Try again later",
//     });
//   }
// });

// app.listen(3030, () => {
//   console.log("server start on port 3030");
// });

// const oauth2Client = new OAuth2(
//   process.env.clientID,
//   process.env.clientSecret,
//   "https://developers.google.com/oauthplayground"
// );

// myOAuth2Client.setCredentials({
//   refresh_token: process.env.refreshToken,
// });

// const myAccessToken = oauth2Client.getAccessToken();
