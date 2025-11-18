import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const emailContent = `
      <h2>New Quote Request from ${data.fullName}</h2>
      
      <h3>Personal Information</h3>
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      
      <h3>Business Information</h3>
      <p><strong>Business Name:</strong> ${data.businessName}</p>
      <p><strong>Business Address:</strong> ${data.businessAddress}</p>
      <p><strong>Category:</strong> ${data.businessCategory}</p>
      <p><strong>Description:</strong> ${data.businessDescription}</p>
      <p><strong>Current Website:</strong> ${data.currentWebsite || 'N/A'}</p>
      
      <h3>Service Details</h3>
      <p><strong>Service Requested:</strong> ${data.service}</p>
      <p><strong>Preferred Package:</strong> ${data.pricingPackage}</p>
      <p><strong>Project Budget:</strong> ${data.projectBudget}</p>
      <p><strong>Timeline:</strong> ${data.startTimeline}</p>
      
      <h3>Additional Notes</h3>
      <p>${data.additionalNote || 'No additional notes'}</p>
    `

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Quote Request - ${data.businessName}`,
      html: emailContent,
    })

    return NextResponse.json({ success: true, message: 'Quote request sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, message: 'Failed to send quote request' }, { status: 500 })
  }
}
