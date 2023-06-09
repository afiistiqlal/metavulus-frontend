import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "no-reply@pk-ent.com",
      pass: "tmtzeeeedfxagcvf",
    },
  });

  const recipients = [email, "wisnubl1995@gmail.com"];

  const info = await transporter.sendMail({
    from: `"no-reply@pk-ent.com" <${email}>`,
    to: recipients.join(", "),
    subject: "Subscribe to our newsletter",
    text: "",
    html: `
    <h1>Thank you for Subcribing to our Newsletter!</h1>
    <br />
    <p>Here's your detail</p>
    <p>Email: ${email}</p>
    <br />
    <p>Please dont reply this message, thank you!</p>
    `,
  });

  console.log("Message sent: %s", info.messageId);

  res.status(200).json({ success: true });
}
