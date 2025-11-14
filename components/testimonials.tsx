"use client"

import { motion, Variants } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Chioma Okonkwo",
      business: "Fashion Store Owner",
      image: "/professional-woman-headshot.jpg",
      quote:
        "BrandLift transformed my business. My online store is now generating 3x more revenue. Their team was professional and responsive throughout the process.",
      rating: 5,
    },
    {
      id: 2,
      name: "Tunde Oluwaseun",
      business: "Tech Consultant",
      image: "/professional-man-headshot.jpg",
      quote:
        "The website they built for me is sleek, fast, and has helped me attract premium clients. Best investment I've made for my business.",
      rating: 5,
    },
    {
      id: 3,
      name: "Blessing Adeyemi",
      business: "Restaurant Manager",
      image: "/professional-woman-with-smile.jpg",
      quote:
        "Having an online presence with BrandLift has been game-changing. Customers can now order online and my reach has expanded tremendously.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ade Okafor",
      business: "Digital Marketing Agency",
      image: "/professional-man-smiling.jpg",
      quote:
        "BrandLift's support doesn't end after launch. They've been incredible with maintenance and updates. Highly recommended for any business!",
      rating: 5,
    },
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Nigerian Businesses
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about transforming their businesses with our web solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                borderColor: "#3b82f6",
              }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 text-base leading-relaxed">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { value: "150+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "5 Years", label: "Industry Experience" },
          ].map((stat, index) => (
            <motion.div key={index} className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
              <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
