import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#04152d] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
          About <span className="text-[#576cbc]">Me</span>
        </h2>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="md:col-span-5 flex justify-center">
            <img
              src={getImageUrl("Assets/aboutImg.png")}
              alt="About Oreva"
              className="w-80 h-80 md:w-420 rounded-2xl object-cover shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="md:col-span-7 space-y-10">
            <div className="space-y-8">
              {/* Frontend */}
              <div className="flex gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-[#576cbc]/10 rounded-xl flex items-center justify-center text-4xl">
                  💻
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Frontend Developer
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    I specialize in building responsive, scalable, and visually
                    engaging interfaces using React.js, Tailwind CSS, and modern
                    UI libraries. I focus on performance, accessibility, and
                    delightful user experiences.
                  </p>
                </div>
              </div>

              {/* Backend */}
              <div className="flex gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-[#576cbc]/10 rounded-xl flex items-center justify-center text-4xl">
                  ⚙️
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Backend Developer
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    I develop efficient and secure RESTful APIs using Node.js,
                    Express, and MongoDB. I ensure smooth communication between
                    frontend and backend for high-performing applications.
                  </p>
                </div>
              </div>

              {/* JavaScript */}
              <div className="flex gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-[#576cbc]/10 rounded-xl flex items-center justify-center text-4xl">
                  🟨
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    JavaScript Developer
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    Strong proficiency in modern JavaScript (ES6+). I build
                    clean, modular, and maintainable code across the full MERN
                    stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
