import FormData from "form-data";
import Mailgun from "mailgun.js";

type Data = {
  email: string;
  subject: string;
  message: string;
  name: string;
};

export async function sendSimpleMessage({
  email,
  subject,
  message,
  name,
}: Data) {
  const mailgunApiKey = process.env.MAILGUN_API_KEY;
  if (!mailgunApiKey) {
    throw new Error(
      "Missing mailgun api key, please define MAILGUN_API_KEY in your .env file",
    );
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: mailgunApiKey,
  });
  try {
    const data = await mg.messages.create(
      "sandbox9cbe43c569f34153b8efc76c9d298927.mailgun.org",
      {
        from: `${name} <${email}>`,
        to: ["Test User<mrx7355608@gmail.com>"],
        subject: subject,
        text: message,
      },
    );

    console.log(data);
  } catch (error) {
    throw error;
  }
}
