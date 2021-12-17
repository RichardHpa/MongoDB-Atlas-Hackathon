require('dotenv').config();
import nodemailer from 'nodemailer';
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

async function sendEmail({
  to,
  subject,
  html,
  from = process.env.MAIL_FROM as string,
}: MailOptions) {
  const transporter = nodemailer.createTransport(config);
  await transporter.sendMail({ from, to, subject, html });
}

export { sendEmail };
