"use client"

import { Code2, Sparkles, Rocket, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import type { Variant, Variants } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Website Design & Development",
      description: "Professional, responsive websites that showcase your brand and drive customer engagement.",
    },
    {
      icon: Sparkles,
      title: "Digital Branding",
      description: "Complete branding solutions including logos, identity systems, and brand strategy.",
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Strategic planning and implementation to boost your online visibility and business growth.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing technical support, updates, and optimization to keep your digital presence strong.",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Our Services</h2>
          <p className="text-xl text-gray-600">Innovative solutions to elevate your brand and drive growth</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-blue-100"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  borderColor: "#2563eb",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
