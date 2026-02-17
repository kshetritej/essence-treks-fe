import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      setLoading(false);
      return;
    }

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `
*New Contact Form Submission*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Your WhatsApp number (replace with your actual number)
      const whatsappNumber = "9779804148802"; // Remove any spaces or special characters

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      toast.success("Opening WhatsApp with your message...");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to open WhatsApp. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <Helmet>
        <title>Contact Us | Essence Treks</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white animate__animated animate__fadeInDown animate__delay-1s">
            Contact Us
          </h2>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Fill out the form below and we'll receive your message directly on
            WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#23272f] bg-opacity-95 rounded-xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                  placeholder="What information do you need?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                <FaWhatsapp className="text-xl" />
                {loading ? "Preparing..." : "Send via WhatsApp"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#23272f] bg-opacity-95 rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FaMapMarkerAlt className="text-green-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">
                    Our Location
                  </h4>
                  <p className="text-gray-400">
                    Essence Tours and Travels & Treks and Expedition Pvt. LTD.
                  </p>
                  <p className="text-gray-400">Lakeside, Pokhara, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FaPhoneAlt className="text-blue-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">
                    Phone Numbers
                  </h4>
                  <p className="text-gray-400">+977-9804148802</p>
                  <p className="text-gray-400">+061-452788</p>
                  <p className="text-gray-400">+061-452677</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FaEnvelope className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">
                    Email Address
                  </h4>
                  <p className="text-gray-400">info@essencetreks.com</p>
                  <p className="text-gray-400">bookings@essencetreks.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FaWhatsapp className="text-green-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/9779804148802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    +977-9804148802
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/essencetreksinnepal/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] text-white hover:bg-opacity-90 transition-colors"
                >
                  <FaFacebook className="text-xl" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-[#23272f] rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
            <p className="text-gray-200 mb-4">
              Essence Tours and Travels & Treks and Expedition Pvt. LTD.
            </p>
            <p className="text-gray-200">Lakeside, Pokhara, Nepal</p>
          </div>
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.5104958820325!2d83.95620037570585!3d28.217907802787973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995950584c13853%3A0xa3679f8dbb62e6de!2sEssence%20Tours%20and%20Travels%20%26%20Treks%20and%20Expedition%20Pvt.%20LTD.!5e1!3m2!1sen!2snp!4v1771302475760!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              title="Essence Treks Location"
              className="rounded-b-xl"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
