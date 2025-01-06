import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

export const transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '2e718efeb0b036',
    pass: 'f57b81d2195196',
  },
});
transport.use(
  'compile',
  hbs({
    viewEngine: {
      defaultLayout: undefined,
    },
    viewPath: './emails',
    extName: '.hbs',
  }),
);
