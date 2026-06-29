import skills from "../../data/skills.json";
import history from "../../data/workHistroy.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#04152d]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
          Experience &amp; Skills
        </h2>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Skills Section */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-semibold mb-10 text-center lg:text-left">
              Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, id) => (
                <div
                  key={id}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-[#19376d] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                      className="w-14 h-14"
                    />
                  </div>
                  <p className="font-medium text-base">{skill.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl font-semibold mb-10 text-center lg:text-left">
              Work Experience
            </h3>

            <div className="space-y-10">
              {history.map((historyItem, id) => (
                <div
                  key={id}
                  className="bg-linear-to-r from-[#19376d] to-transparent border border-[#576cbc]/30 rounded-2xl p-6 hover:border-[#576cbc] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-white">
                        {historyItem.role}
                      </h4>
                      <p className="text-[#576cbc] text-xl mt-1">
                        {historyItem.organisation}
                      </p>
                    </div>
                    <p className="text-gray-400 whitespace-nowrap">
                      {historyItem.startDate} — {historyItem.endDate}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
                    {historyItem.experiences.map((experience, idx) => (
                      <li key={idx} className="text-[15px] md:text-base leading-relaxed">
                        {experience}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
