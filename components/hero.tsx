"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Image from "next/image"


export default function Hero() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48"
          animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"
          animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="inline-block px-4 py-2 bg-blue-100 rounded-full w-fit" variants={itemVariants}>
              <span className="text-blue-700 text-sm font-semibold">Welcome to BrandLift Technologies</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-balance"
              variants={itemVariants}
            >
              We lift brands with technology.
            </motion.h1>

            <motion.p className="text-xl text-gray-600 leading-relaxed" variants={itemVariants}>
              Empowering business growth through innovation. We create professional websites, digital strategies, and
              branding solutions that transform ideas into impactful results.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                  Get a Free Quote
                  <ArrowRight size={20} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg bg-transparent"
                >
                  View Packages
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div className="flex items-center gap-6 pt-8 border-t border-gray-200" variants={itemVariants}>
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "1000+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }}>
                  <p className="font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  {index < 2 && <div className="w-px h-12 bg-gray-200 hidden sm:block absolute -right-3"></div>}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

       {/* Hero Image Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-2xl border border-blue-200"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <img 
                src="/hero-website-preview-img.png" 
                alt="Professional website mockup showcasing BrandLift Technologies dashboard interface"
                className="bg-white rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
