"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form-input";
import FormSelect from "@/components/form-select";
import FormTextarea from "@/components/form-textarea";
import Link from "next/link";
import { Home } from "lucide-react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormErrors {
  [key: string]: string;
}

export default function GetQuotePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // ✅ ADDED
  const [countryCode, setCountryCode] = useState("ng");

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

  // ✅ ADDED
  useEffect(() => {
    try {
      const locale = navigator.language || "en-NG";
      const country = locale.split("-")[1]?.toLowerCase();
      if (country) {
        setCountryCode(country);
      }
    } catch {
      setCountryCode("ng");
    }
  }, []);

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

        const whatsappUrl = `https://wa.me/2348160499031?text=${encodeURIComponent(
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
      <section className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6 mt-6 mb-6">

        {/* ONLY phone input upgraded */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>

          <PhoneInput
            country={countryCode}
            value={formData.phoneNumber}
            onChange={(phone) => {
              setFormData((prev) => ({
                ...prev,
                phoneNumber: phone,
              }));

              if (errors.phoneNumber) {
                setErrors((prev) => ({
                  ...prev,
                  phoneNumber: "",
                }));
              }
            }}
            inputClass="!w-full !py-3 !pl-14 !border-2 !border-gray-200 !rounded-lg"
            containerClass="!w-full"
            buttonClass="!border-2 !border-gray-200 !rounded-l-lg"
          />

          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* email unchanged */}
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
