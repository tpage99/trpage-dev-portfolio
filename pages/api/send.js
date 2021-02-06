const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  return new Promise ((resolve, reject) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, message } = req.body

  const msg = {
    to: 'taylor@thepagesmedia.com',
    from: 'taylor@thepagesmedia.com',
    subject: `Dev Site Contact from ${name}`,
    text: message,
    html: `<p>Hi, my name is <strong>${name}</strong> and my contact email is: ${email}.</p><p>I want to talk to you about: ${message}</p>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
      return resolve();
    })
  })
}