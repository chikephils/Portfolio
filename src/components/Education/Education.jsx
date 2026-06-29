import education from "../../data/education.json";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#04152d]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Education
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, id) => (
            <div
              key={id}
              className="bg-linear-to-r from-[#19376d] to-transparent border border-[#576cbc]/30 rounded-3xl p-8 hover:border-[#576cbc] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {edu.name}
                  </h3>
                  <p className="text-[#576cbc] text-xl mt-2">
                    {edu.qualification} {edu.description}
                  </p>
                </div>
                <div className="text-right md:text-left">
                  <p className="text-gray-400 text-lg font-medium">
                    {edu.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
