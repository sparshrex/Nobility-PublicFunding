const nodemailer = require("nodemailer");
const entities = require("html-entities");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendEmail = async (req, res) => {
  const { recipient, subject } = req.body;
  const emailHtml = entities.decode(req.body.emailHtml, { level: "html5" });
  const mailOptions = {
    from: process.env.EMAIL,
    to: recipient,
    subject,
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
};

module.exports = { sendEmail };
