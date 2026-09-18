const nodemailer = require('nodemailer');

// Create transporter for Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Send contact form email
const sendContactEmail = async (contactData) => {
  try {
    // Email to portfolio owner
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `New Contact Form Submission: ${contactData.subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Subject:</strong> ${contactData.subject || 'No Subject'}</p>
        <hr/>
        <h3>Message:</h3>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to visitor
    const confirmationEmail = {
      from: process.env.GMAIL_EMAIL,
      to: contactData.email,
      subject: 'We received your message - Simamkele Tancu',
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Hi ${contactData.name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <hr/>
        <h3>Your Message:</h3>
        <p><strong>Subject:</strong> ${contactData.subject || 'No Subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
        <hr/>
        <p>Best regards,<br/>Simamkele Tancu</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendContactEmail };
