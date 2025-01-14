import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineDownload } from "react-icons/hi";

const socialLinks = [
  {
    icon: <FaGithub className="text-2xl" />,
    href: "https://github.com/kissan5",
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    href: "https://www.linkedin.com/in/kishan-sah-9889651a0/",
  },
  {
    icon: <FaTwitter className="text-2xl" />,
    href: "https://x.com/KissanShah",
  },
];

const designs = [
  "Design 1",
  "Design 2",
  "Design 3",
  "Design 4",
];

function HomePage() {
  return (
    <motion.div className="min-h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-black text-white p-6">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hey, I'm Kishan
        </motion.h1>
        <motion.div
          className="mt-6 text-xl md:text-3xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer 💻",
              2000,
              "UI/UX Enthusiast 🎨",
              2000,
              "Problem Solver 🧩",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          className="flex justify-center gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-all transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Showcase Designs Section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          My Designs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-lg text-gray-300">{design}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-4">
          {[
            {
              title: "Graphic Design",
              description:
                "Creating visually stunning designs that resonate with your brand.",
            },
            {
              title: "Digital Marketing",
              description:
                "Optimizing your online presence to reach the right audience.",
            },
            {
              title: "UI/UX Design",
              description:
                "Designing user-friendly and aesthetically pleasing interfaces.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-purple-400">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-4">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Download CV Section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Download My CV
        </h2>
        <motion.a
          href="/path/to/your-cv.pdf"
          download
          className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg shadow-md transition-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HiOutlineDownload className="mr-2 text-2xl" /> Download Now
        </motion.a>
      </section>
    </motion.div>
  );
}

export default HomePage;
