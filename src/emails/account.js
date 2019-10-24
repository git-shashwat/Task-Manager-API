const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv')
dotenv.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        from: email,
        to: 'shashwat824@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        from: email,
        to: 'shashwat824@gmail.com',
        subject: 'I love you 3000',
        text: `You'll be missed, ${name}. Let us know how we can improve!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}