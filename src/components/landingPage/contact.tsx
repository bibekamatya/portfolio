import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./../Icons";
import { Header } from "./../header";
import { CONTACT_DETAILS } from "../../dataSheet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xblqjokv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-black py-16 lg:py-20 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Header header="Get In Touch" />
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let's work together
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>
            
            <div className="space-y-6">
              {CONTACT_DETAILS.map(({ icon, title, content }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-brand-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      {title}
                    </h4>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      {content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm"
          >
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your name"
                    className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-xl">
                    <p className="text-green-700 dark:text-green-400 font-medium text-center">
                      ✓ Message sent successfully!
                    </p>
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-xl">
                    <p className="text-red-700 dark:text-red-400 font-medium text-center">
                      ✗ Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
