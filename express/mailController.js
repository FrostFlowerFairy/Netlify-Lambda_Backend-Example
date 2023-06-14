const nodemailer = require("nodemailer");

// create a transporter object using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  host: "34.22.18.62",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// send an email
exports.sendEmail = (req, res) => {
  const { name, to, email, comment } = req.body;

  transporter.sendMail(
    {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: `💖 to ${to} from ${name} via personal website 💖`,
      text: comment,
    },
    (err, info) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        console.log(info);
        res.send("Email sent successfully");
      }
    }
  );
};
