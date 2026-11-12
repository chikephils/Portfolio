import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#04152d] px-4 pt-24"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-7 space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-[#576cbc]">Oreva Philips</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mt-4">
              Full-Stack Software Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[15px] md:text-lg text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            I am a Full-Stack Software Developer with experience building and
            deploying modern web applications. I work across the frontend and
            backend using React, JavaScript, TypeScript, Node.js, NestJS,
            MongoDB, and PostgreSQL. From designing responsive user interfaces
            to developing APIs, implementing authentication, and managing
            databases, I enjoy turning ideas into practical, scalable
            applications. I value clean code, continuous learning, and
            collaborative development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:chikephils@gmail.com"
              className="flex items-center justify-center gap-3 bg-[#576cbc] hover:bg-[#4359a3] px-8 py-4 rounded-full font-medium transition-all"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Oreva_resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-[#576cbc] hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div className="relative">
            <img
              src={getImageUrl("Assets/displaypic.jpg")}
              alt="Oreva Philips"
              className="w-50 h-50 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-[#576cbc]/30 shadow-2xl"
            />
            <div className="absolute -inset-10 bg-linear-to-r from-[#576cbc] to-[#19376d] rounded-full -z-10 blur-3xl opacity-30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
