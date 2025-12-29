"use client"

import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import { motion } from "framer-motion"
import { Variants } from "framer-motion"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "From ₦80,000",
      color: "bg-green-50",
      accent: "bg-green-600",
      features: [
        "2–3 pages",
        "Mobile responsive design",
        "WhatsApp chat integration",
        "Basic SEO",
        "1-month free maintenance",
      ],
    },
    {
      name: "Professional",
      price: "From ₦200,000",
      color: "bg-blue-50",
      accent: "bg-blue-600",
      highlighted: true,
      features: ["4–6 pages", "Custom design", "Booking/contact form", "Google Business setup", "1.5 months maintenance"],
    },
    {
      name: "Premium",
      price: "From ₦450,000",
      color: "bg-amber-50",
      accent: "bg-amber-600",
      features: [
        "Full e-commerce or business system",
        "Admin dashboard",
        "Advanced SEO",
        "Free domain & hosting setup",
        "2 months maintenance",
      ],
    },
  ]

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Our Pricing Packages</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your business</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: plan.highlighted ? -20 : -10,
              }}
              className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.highlighted ? `${plan.color} border-blue-300 shadow-2xl` : `${plan.color} border-gray-200`
              }`}
            >
              <div className={`w-4 h-4 rounded-full ${plan.accent} mb-4`}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-900 mb-6">{plan.price}</p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => window.location.href = '/get-quote'}
                  className={`w-full mb-8 rounded-lg py-6 font-semibold ${
                    plan.highlighted
                      ? `${plan.accent} text-white hover:opacity-90`
                      : "border-2 border-gray-300 text-gray-900 hover:bg-gray-50"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </motion.div>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.accent.replace("bg-", "text-")}`} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
