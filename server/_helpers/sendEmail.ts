import { createTransport } from 'nodemailer';
import { User } from '_types/models/User';
import type { TransportOptions } from 'nodemailer';
import type { MailOptions } from '../_types/MailOptions';

const config = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
} as TransportOptions;

const sendEmail = async ({
  to,
  subject,
  html,
  from = process.env.MAIL_FROM as string,
}: MailOptions) => {
  const transporter = createTransport(config);
  await transporter.sendMail({ from, to, subject, html });
};

export const sendVerificationEmail = async (account: User, origin: string) => {
  let message;
  if (origin) {
    const verifyUrl = `${origin}/verify-email?token=${account.verificationToken}`;
    message = `<p>Please click the below link to verify your email address:</p>
                 <p><a href="${verifyUrl}" target="_blank">${verifyUrl}</a></p>`;
  } else {
    message = `<p>Please use the below token to verify your email address with the <code>/account/verify-email</code> api route:</p>
                 <p><code>${account.verificationToken}</code></p>`;
  }

  await sendEmail({
    to: account.email,
    subject: 'Sign-up Verification API - Verify Email',
    html: `<h4>Verify Email</h4>
             <p>Thanks for registering!</p>
             ${message}`,
  });
};
