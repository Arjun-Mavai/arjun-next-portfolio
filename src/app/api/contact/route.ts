import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import nodemailer from 'nodemailer'
import { generateEmailTemplate } from '@/lib/email-template'
 
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body
    console.log(name, email, message)

    // Store in Supabase
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message,
          created_at: new Date().toISOString()
        }
      ])

    if (error) throw error

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.APP_URL, // Your email password or app password
      },
    })

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    // Send thank you email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Thank you for reaching out! - Arjun Singh Gurjar",
      html: generateEmailTemplate(name)
    })

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully!'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}