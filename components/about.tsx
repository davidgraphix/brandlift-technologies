"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import type { Variant, Variants } from "framer-motion"

export default function About() {
  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At BrandLift Technologies, we believe technology is the bridge between ideas and success. We help business
              owners, startups, and organizations grow by designing websites, branding, and digital systems that work —
              simple, smart, and impactful.
            </p>
            <div className="space-y-3 pt-4">
              {[
                "Custom website design tailored to your brand",
                "Digital strategy & branding solutions",
                "Mobile-first design for all devices",
                "Ongoing support and maintenance included",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "500+", label: "Happy Clients" },
                { value: "1000+", label: "Projects Done" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md border border-blue-50"
                  custom={index}
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                >
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
