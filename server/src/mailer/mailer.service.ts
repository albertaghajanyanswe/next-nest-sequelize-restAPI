import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();
const mailSettings = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  user: process.env.MAIL_USER,
  password: process.env.MAIL_PASSWORD,
};

@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: mailSettings.host,
      port: mailSettings.port,
      secure: true,
      ignoreTLS: true,
      auth: {
        user: mailSettings.user,
        pass: mailSettings.password,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: mailSettings.user,
      to,
      subject: 'Activate account ',
      text: '',
      html: `
        <div>
          <h1>To activate the account follow the link.</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
    });
  }
}
