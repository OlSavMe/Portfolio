const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const dotenv = require("dotenv");
const OAuth2 = google.auth.OAuth2;
const path = require("path");
const app = express();
port = process.env.PORT || 3030;

// const directory = process.env.NODE_ENV === "development" ? "public" : "build";
// const buildPath = path.join(__dirname, "..", directory);

console.log(process.env.NODE_ENV);

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));
dotenv.config();

const oauth2Client = new OAuth2(
  process.env.clientID,
  process.env.clientSecret,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.refreshToken,
});
const myAccessToken = oauth2Client.getAccessToken();

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.email,
    clientId: process.env.clientID,
    clientSecret: process.env.clientSecret,
    refreshToken: process.env.refreshToken,
    accessToken: myAccessToken,
  },
});

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

  const mailOptions = {
    from: process.env.email,
    to: "savkao@hotmail.com",
    name: req.body.name,
    html: output,
  };

  transport.sendMail(mailOptions, function (err, result) {
    if (err) {
      res.send({
        message: "Something went wrong, please try again later.",
      });
    } else {
      transport.close();
      res.send({
        message: "Thank you for contacting me!",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
