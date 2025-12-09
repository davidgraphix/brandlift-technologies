"use client"

import { motion, Variants } from "framer-motion"

export default function Portfolio() {
  const projects = [
    {
      title: "Printing E-commerce Store",
      category: "E-commerce",
      image: "/printpalash.png",
    },
    {
      title: "Tech Academy Website",
      category: "Education",
      image: "/smart-tech.png",
    },
    {
      title: "Real Estate Platform",
      category: "E-commerce",
      image: "/real-estate.png",
    },
    {
      title: "Photography Portfolio",
      category: "Portfolio",
      image: "/photography.png",
    },
    {
      title: "School Dashboard Portal",
      category: "Education",
      image: "/yct-connect.png",
    },
    {
      title: "Gadgets E-commerse store",
      category: "Business",
      image: "/e-commerse.png",
    },
      {
      title: "Barber Shop Website",
      category: "Business",
      image: "/2-talk.jpeg",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Our Recent Projects</h2>
          <p className="text-xl text-gray-600">See what we've built for our clients</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
            >
              <motion.img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-blue-400 text-sm font-semibold mb-1">{project.category}</p>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
