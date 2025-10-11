/* eslint-disable @typescript-eslint/no-explicit-any */
import User from "@/modals/usersModal";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // Create a Token
    const hasedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hasedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hasedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAILTRAP_USER,
        pass: process.env.EMAILTRAP_PASS,
      },
    });

    const mailOption = {
      from: "nathdeveloper25@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your account" : "Reset Your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/${emailType === "VERIFY" ? "verify-email" : "update-password"}?token=${hasedToken}">Here</a> To ${
        emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Email"
      }</p>`,
    };

    const mailResponse = await transport.sendMail(mailOption);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
