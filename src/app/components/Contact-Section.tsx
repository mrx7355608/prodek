"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import Spinner from "./Spinner";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const openGmail = () => {
    const emailLink = "mailto:mrx7355609@gmail.com";
    window.open(emailLink, "_blank");
  };

  const openWhatsapp = () => {
    const phone = "923110253094";
    const waAppLink = `whatsapp://send?phone=${phone}&text=${message}`;
    const waWebLink = `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isMobile = isAndroid || isIOS;

    if (isMobile) {
      window.open(waAppLink, "_blank");
    } else {
      window.open(waWebLink, "_blank");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to send email, please try again later");
      }

      setMessage("Email has been sent! We will contact you shortly");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log((err as Error).message);
      setError("Unable to send email, please try again later");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="flex justify-center flex-col items-center w-full max-w-6xl mx-auto px-3 md:px-6">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-3 py-1.5 md:px-4 md:py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium mb-12"
        >
          CONTACT US
        </motion.span>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch
            with our team.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-15">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="px-2 md:px-0 bg-white rounded-lg justify-center w-full"
            >
              {error && (
                <p className="text-sm md:text-md mb-5 text-red-500">{error}</p>
              )}
              {message && (
                <p className="text-sm md:text-md mb-5 text-green-500">
                  {message}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-sm md:text-md ">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>
              <div className="mb-5 text-sm md:text-md ">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100  rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6 text-sm md:text-md ">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-sm md:text-md  bg-sky-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-sky-700 transition-colors flex items-center justify-center"
                disabled={loading}
              >
                {loading ? <Spinner /> : <Send className="w-5 h-5 mr-2" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-sm md:text-md space-y-6">
              {/* EMAIL */}
              <div
                onClick={openGmail}
                className="cursor-pointer flex items-start"
              >
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg underline">Email</h4>
                  <p className="text-gray-600">info@prosoft.com</p>
                </div>
              </div>

              {/* WHATSAPP */}
              <div
                onClick={openWhatsapp}
                className="cursor-pointer flex items-start"
              >
                <div className="bg-gray-100 p-2 rounded-full mr-4">
                  <img
                    src="/whatsapp-icon.png"
                    className="w-8 h-8 text-gray-600"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-lg underline">Whatsapp</h4>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
