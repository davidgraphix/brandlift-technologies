"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form-input";
import FormSelect from "@/components/form-select";
import FormTextarea from "@/components/form-textarea";
import Link from "next/link";
import { Home } from "lucide-react";

interface FormErrors {
  [key: string]: string;
}

export default function GetQuotePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    businessAddress: "",
    phoneNumber: "",
    email: "",
    businessCategory: "",
    businessDescription: "",
    currentWebsite: "",
    service: "",
    pricingPackage: "",
    projectBudget: "",
    location: "",
    startTimeline: "",
    additionalNote: "",
  });

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.businessAddress.trim())
      newErrors.businessAddress = "Business address is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.businessCategory)
      newErrors.businessCategory = "Business category is required";
    if (!formData.businessDescription.trim())
      newErrors.businessDescription = "Business description is required";
    if (!formData.service) newErrors.service = "Service selection is required";
    if (!formData.pricingPackage)
      newErrors.pricingPackage = "Pricing package is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.startTimeline)
      newErrors.startTimeline = "Start timeline is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Open WhatsApp
        const message = `Hi! I'm interested in your services.
        
Name: ${formData.fullName}
Business: ${formData.businessName}
Phone: ${formData.phoneNumber}
Email: ${formData.email}
Category: ${formData.businessCategory}
Service: ${formData.service}
Pricing Plan: ${formData.pricingPackage}
Budget: ${formData.projectBudget}

${formData.businessDescription}`;

        const whatsappUrl = `https://wa.me/2349117542774?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");

        router.push("/thank-you");
      } else {
        setErrors({
          submit: "Failed to send quote request. Please try again.",
        });
      }
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again." });
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link href="/">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white/90 backdrop-blur-md border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all shadow-lg"
          >
            <Home size={20} className="text-blue-600" />
            <span className="font-semibold text-gray-700">Back to Home</span>
          </Button>
        </Link>
      </motion.div>
      <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-600">
              Fill out the form below and our team will contact you shortly
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 mb-8 shadow-xl text-white"
          >
            <h2 className="text-2xl font-bold mb-4">About BrandLift Technologies</h2>
            <p className="text-blue-100 mb-4 leading-relaxed">
              We are a Nigerian tech company dedicated to helping local businesses establish their online presence. 
              Our mission is to lift brands with technology, providing affordable and professional web solutions 
              that help businesses grow and thrive in the digital age.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-blue-200 text-sm">Projects Done</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </motion.div>


          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
          >
            {errors.submit && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-red-700"
              >
                {errors.submit}
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <FormInput
                label="Full Name"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
                required
              />
              <FormInput
                label="Business Name"
                name="businessName"
                placeholder="Your business name"
                value={formData.businessName}
                onChange={handleInputChange}
                error={errors.businessName}
                required
              />
            </div>

            <FormInput
              label="Business Address"
              name="businessAddress"
              placeholder="Enter your business address"
              value={formData.businessAddress}
              onChange={handleInputChange}
              error={errors.businessAddress}
              required
            />

            <div className="grid md:grid-cols-2 gap-6 mt-6 mb-6">
              <FormInput
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="+234..."
                value={formData.phoneNumber}
                onChange={handleInputChange}
                error={errors.phoneNumber}
                required
              />
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <FormSelect
                label="Business Category"
                name="businessCategory"
                options={[
                  "Fashion",
                  "Tech",
                  "Food",
                  "Real Estate",
                  "Logistics",
                  "Photography",
                  "Others",
                ]}
                value={formData.businessCategory}
                onChange={handleInputChange}
                error={errors.businessCategory}
                required
              />
              <FormSelect
                label="Location"
                name="location"
                options={[
                  "Lagos",
                  "Abuja",
                  "Port Harcourt",
                  "Kano",
                  "Ibadan",
                  "Other",
                ]}
                value={formData.location}
                onChange={handleInputChange}
                error={errors.location}
                required
              />
            </div>

            <FormTextarea
              label="Business Description"
              name="businessDescription"
              placeholder="Tell us about your business..."
              value={formData.businessDescription}
              onChange={handleInputChange}
              error={errors.businessDescription}
              required
            />

            <FormInput
              label="Current Website (Optional)"
              name="currentWebsite"
              type="url"
              placeholder="https://..."
              value={formData.currentWebsite}
              onChange={handleInputChange}
            />

            <div className="grid md:grid-cols-2 gap-6 mt-6 mb-6">
              <FormSelect
                label="What service are you requesting?"
                name="service"
                options={[
                  "Website Design",
                  "Branding",
                  "Full Tech Setup",
                  "E-Commerce Website",
                  "Custom Web App",
                  "Digital Marketing",
                ]}
                value={formData.service}
                onChange={handleInputChange}
                error={errors.service}
                required
              />
              <FormSelect
                label="Preferred Pricing Package"
                name="pricingPackage"
                options={["Starter", "Professional", "Premium", "Custom"]}
                value={formData.pricingPackage}
                onChange={handleInputChange}
                error={errors.pricingPackage}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <FormSelect
                label="Project Budget Range"
                name="projectBudget"
                options={[
                  "₦80k - ₦150k",
                  "₦200k - ₦300k",
                  "₦450k - ₦600k",
                  "₦700k - ₦1M",
                  "₦1M+",
                ]}
                value={formData.projectBudget}
                onChange={handleInputChange}
              />
              <FormSelect
                label="How soon do you want to start?"
                name="startTimeline"
                options={["Immediately", "1–2 weeks", "1 month", "Not sure"]}
                value={formData.startTimeline}
                onChange={handleInputChange}
                error={errors.startTimeline}
                required
              />
            </div>

            <FormTextarea
              label="Additional Notes"
              name="additionalNote"
              placeholder="Any additional information..."
              value={formData.additionalNote}
              onChange={handleInputChange}
              rows={3}
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8"
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
              >
                {isLoading ? "Sending..." : "Get Your Quote"}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
