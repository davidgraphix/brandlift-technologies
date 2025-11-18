# BrandLift Technologies - Setup Guide

## Environment Variables

To set up email and WhatsApp integration, add the following environment variables to your Vercel project:

### 1. Gmail Configuration (Nodemailer)

You'll need to set up an App Password for Gmail:

1. Go to [Google Account Security Settings](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Go back to Security settings and look for "App passwords"
4. Select "Mail" and "Windows Computer" (or your device)
5. Google will generate a 16-character password
6. Copy this password and add it to `GMAIL_PASSWORD`

**Environment Variables:**
- `GMAIL_USER` - Your Gmail address (e.g., yourname@gmail.com)
- `GMAIL_PASSWORD` - Your 16-character App Password from Google

### 2. WhatsApp Integration

The WhatsApp integration uses WhatsApp Web link. The phone number format should be without + or spaces.

**Environment Variables:**
- `WHATSAPP_PHONE_NUMBER` - Your WhatsApp number in format 2348123456789

### 3. Email Configuration

- `OWNER_EMAIL` - Email address where quote requests will be sent

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings"
3. Navigate to "Environment Variables"
4. Add each variable with its value
5. Make sure the variables are added to the correct environment (Production, Preview, Development)

## API Endpoints

### Quote Request API
- **Endpoint:** `/api/send-quote`
- **Method:** POST
- **Body:** Quote form data
- **Response:** `{ success: boolean, message: string }`

### Contact Form API
- **Endpoint:** `/api/send-contact`
- **Method:** POST
- **Body:** Contact form data
- **Response:** `{ success: boolean, message: string }`

## Features Implemented

### Pages
- ✅ `/get-quote` - Comprehensive quote request form
- ✅ `/thank-you` - Thank you confirmation page
- ✅ Contact form integrated into homepage

### Form Components
- ✅ FormInput - Text input with validation
- ✅ FormSelect - Dropdown select with validation
- ✅ FormTextarea - Textarea with validation

### Integrations
- ✅ Nodemailer for email delivery
- ✅ WhatsApp Web integration for direct messaging
- ✅ Form validation and error handling
- ✅ Loading states and success/error messages
- ✅ Framer Motion animations throughout

## Troubleshooting

### Email not sending?
- Verify Gmail App Password is correct (16 characters)
- Check that 2-Step Verification is enabled
- Ensure email address is correct
- Check Vercel logs for error messages

### WhatsApp link not opening?
- Verify phone number format (no + or spaces)
- Make sure WhatsApp Web is supported in your region
- Test the link manually: `https://wa.me/2348123456789`

### Form validation errors?
- Check browser console for validation messages
- Ensure all required fields are filled
- Verify email format is valid
