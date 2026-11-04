import express from 'express';
import { Resend } from 'resend';

const router = express.Router();

// Initialize Resend with your API key from Render Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const data = await resend.emails.send({
      // You MUST use this exact 'from' address on the Resend free tier
      from: 'Portfolio <onboarding@resend.dev>', 
      // Put your actual Gmail address here to receive the messages
      to: ['siddhantprakash262@gmail.com'], 
      // This ensures that when you click "Reply" in Gmail, it emails the recruiter/visitor
      reply_to: email, 
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: 'Message sent successfully!', data });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

export default router;