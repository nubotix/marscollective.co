const Mailgun = require('mailgun-js')

const sendEmail = async ({ name, email, message }) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email')
    const {
      MAILGUN_API_KEY: apiKey,
      MAILGUN_DOMAIN: domain,
      EMAIL_FROM: emailFrom,
      EMAIL_TO: emailTo
    } = process.env
    const mailgun = Mailgun({
      apiKey,
      domain
    })

    const emailBody =
      `Nome: ${name}` + '<br>' + `Email: ${email}` + '<br>' + `${message}`

    const mailData = {
      from: emailFrom,
      to: emailTo,
      subject: 'Formulário de contato do site',
      'h:Reply-To': `${name} <${email}>`,
      html: emailBody
    }

    mailgun.messages().send(mailData, err => {
      if (err) return reject(err)

      resolve()
    })
  })
}

exports.handler = async event => {
  try {
    const data = JSON.parse(event.body)

    await sendEmail(data)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Message sent successfully.'
      })
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: e.message
    }
  }
}
