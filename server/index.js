const path = require("path");
const express = require("express");
const app = express();
const transporter = require("./config");
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();
const dotenv = require("dotenv");
dotenv.config();

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/send", (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
  
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      name: req.body.name,
      html: output,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "Up! Something went wrong. Try again later",
        });
      } else {
        res.send({
          success: true,
          message: "Thank you for contacting me!",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Up! Something went wrong. Try again later",
    });
  }
});

app.listen(3030, () => {
  console.log("server start on port 3030");
});
