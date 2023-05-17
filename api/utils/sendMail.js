const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,

    // Added this lines
    credentials: "",
    secure: false,
    useSSL: false,
    ca: "",
    // END of Added this lines

    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,

    // Added this lines
    credentials: "",
    secure: false,
    useSSL: false,
    ca: "",
    // END of Added this lines
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
