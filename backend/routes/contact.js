import { Resend } from 'resend';
// If you are not using ES Modules, use this instead: 
// const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      // You MUST use this exact 'from' address on the free tier
      from: 'Acme <onboarding@resend.dev>', 
      // Put your actual Gmail address here to receive the messages
      to: ['siddhantprakash262@gmail.com'], 
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nVisitor Email: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});