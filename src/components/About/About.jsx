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
              {/* Full Stack */}
              <div className="flex gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-[#576cbc]/10 rounded-xl flex items-center justify-center text-4xl">
                  💻
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Full-Stack Software Developer
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    I build responsive, scalable, and user-focused web
                    applications, working across both frontend and backend
                    development. My experience includes React, TypeScript,
                    Node.js, NestJS, and modern web technologies.
                  </p>
                </div>
              </div>

              {/* Frontend */}
              <div className="flex gap-6 group">
                <div className="w-16 h-16 shrink-0 bg-[#576cbc]/10 rounded-xl flex items-center justify-center text-4xl">
                  🎨
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Frontend Development
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    I create intuitive and responsive user interfaces using
                    React, JavaScript, TypeScript, Tailwind CSS, Redux Toolkit,
                    and Material UI. I focus on clean component architecture,
                    usability, and maintainable code.
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
                    Backend & Database Development
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    I develop RESTful APIs, implement authentication and
                    role-based access control, and manage application data using
                    Node.js, Express, NestJS, MongoDB, PostgreSQL, and Prisma.
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
