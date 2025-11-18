"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const message = `Hi! I'm reaching out from your website.

Name: ${formData.name}
Business: ${formData.businessName}
Email: ${formData.email}

Message: ${formData.message}`

        const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')

        setSubmitStatus('success')
        setFormData({ name: "", email: "", businessName: "", message: "" })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const contactItems: Array<{
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
    link?: string
    color: string
  }> = [
    { icon: Phone, label: "Phone", value: "08160499031", link: "tel:08160499031", color: "bg-blue-600" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+234 911 754 2774",
      link: "https://wa.me/2349117542774",
      color: "bg-green-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "bamideledavidsmart40@gmail.com",
      link: "mailto:bamideledavidsmart40@gmail.com",
      color: "bg-red-500",
    },
    { icon: MapPin, label: "Location", value: "Lagos, Nigeria", color: "bg-purple-600" },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600">Ready to grow your online presence? Get in touch with us today</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border-2 border-green-300 rounded-lg text-green-700"
              >
                Message sent successfully! We'll contact you shortly on WhatsApp.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border-2 border-red-300 rounded-lg text-red-700"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}

            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
              { name: "businessName", label: "Business Name", type: "text", placeholder: "Your business name" },
            ].map((field, index) => (
              <motion.div key={index} variants={itemVariants}>
                <label className="block text-gray-700 font-semibold mb-2">{field.label}</label>
                <motion.input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder={field.placeholder}
                  required
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)" }}
                />
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder="Tell us about your project"
                rows={4}
                required
                whileFocus={{ boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)" }}
              ></motion.textarea>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>

              <div className="space-y-6">
                {contactItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.label}</p>
                        {item.link && (
                          (item.link.startsWith("http") ||
                            item.link.startsWith("tel") ||
                            item.link.startsWith("mailto")) ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )
                        )}
                        {!item.link && <p className="text-gray-600">{item.value}</p>}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="bg-blue-600 text-white rounded-xl p-8"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
            >
              <p className="font-semibold mb-2">⚡ Quick Response</p>
              <p>We typically respond within 2-4 hours during business hours</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
