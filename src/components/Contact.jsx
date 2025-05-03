import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = form;

    if (!name || !email || !message) {
      setLoading(false);
      toast.error('Please fill all fields before submitting!', {
        position: 'bottom-right',
      });
      return;
    }

    emailjs
      .send(
        'service_t61uj9j',
        'template_z760z7k',
        {
          from_name: name,
          to_name: 'Meganathan V',
          reply_to: email,
          to_email: 'vmega0777@gmail.com',
          message,
        },
        'vGOMzem1Na11PcbAP'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setIsSubmitted(true);
          setLoading(false);
          toast.success('Message sent successfully!', {
            position: 'bottom-right',
          });
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error sending email:', error);
          setLoading(false);
          toast.error('Something went wrong! Please try again later.', {
            position: 'bottom-right',
          });
        }
      );
  };

  return (
    <div className="relative bg-gray-900 min-h-screen flex flex-col justify-center items-center py-12 px-6">
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl shadow-xl w-full sm:w-[650px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {isSubmitted ? (
          <div className="text-center text-white">
            <motion.h2
              className="text-4xl font-bold text-yellow-500"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Thank You!
            </motion.h2>
            <motion.p
              className="text-lg mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Your message has been sent successfully. I will get back to you soon.
            </motion.p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <motion.p
                className="text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                GET IN TOUCH
              </motion.p>
              <motion.h2
                className="text-4xl font-extrabold text-white mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Contact Me
              </motion.h2>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="peer w-full py-3 px-6 rounded-lg outline-none border border-gray-700 bg-gray-800 text-white placeholder-transparent focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder={form.name ? '' : 'Your Name'}
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="peer w-full py-3 px-6 rounded-lg outline-none border border-gray-700 bg-gray-800 text-white placeholder-transparent focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder={form.email ? '' : 'Your Email'}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Your Email
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="peer w-full py-3 px-6 rounded-lg outline-none border border-gray-700 bg-gray-800 text-white placeholder-transparent focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder={form.message ? '' : 'Your Message'}
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-6 top-6 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 mt-6 text-white font-bold bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        )}

        <ToastContainer />
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Contact;
