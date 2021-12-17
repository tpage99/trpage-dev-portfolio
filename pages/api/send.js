const sgMail = require('@sendgrid/mail')

  export default async function(req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
    const { name, email, message } = req.body
  
    const content = {
      to: 'taylor@thepagesmedia.com',
      from: 'taylor@thepagesmedia.com',
      subject: `Dev Site Contact from ${name}`,
      text: message,
      html: `<p>Hi, my name is <strong>${name}</strong> and my contact email is: ${email}.</p><p>I want to talk to you about: <br><br>${message}</p>`
    }
  
    try {
      await sgMail.send(content)
      res.status(200).send('Message sent successfully.')
    } catch (error) {
      console.log('ERROR', error)
      res.status(400).send('Message not sent.')
    }
  }