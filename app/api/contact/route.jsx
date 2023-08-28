import { NextResponse } from "next/server"

const nodemailer = require('nodemailer')

export async function POST(req) {

    const data = await req.json()

    console.log(data)

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.BURNER_EMAIL,
            pass: process.env.BURNER_EMAIL_PASSWORD,
        },
        secure: true,
    })

    const mailData = {
        from: 'contactformtester318@gmail.com',
        to: 'cuylerjvv@gmail.com',
        subject: `Contact form submission: ${data.name}`,
        text: `Email: ${data.email} Message: ${data.message}`,
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err)
        }
        else
            console.log(info)
    })

    return NextResponse.json({ name: 'John Doe' })
}