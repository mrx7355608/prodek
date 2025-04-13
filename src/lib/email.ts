import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

export async function sendSimpleMessage() {
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
        from: "Prosoft Cyber Hub <fawad.g26334@iqra.edu.pk>",
        to: ["Test User<mrx7355608@gmail.com>"],
        subject: "Hello Dear, are you there",
        text: "Congratulations Fawad Imran, you just sent an email with Mailgun! You are truly awesome!",
      },
    );

    console.log(data);
  } catch (error) {
    console.log(error); //logs any error
  }
}
