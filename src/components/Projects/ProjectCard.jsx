import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="group bg-linear-to-br from-[#19376d] to-[#04152d] border border-[#576cbc]/30 rounded-3xl overflow-hidden hover:border-[#576cbc] transition-all duration-300 flex flex-col h-full max-w-sm w-full">
      {/* Project Image */}
      <div className="relative h-46 overflow-hidden">
        <img
          src={getImageUrl(imageSrc)}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>

        <p className="text-gray-400 text-[15px] leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, id) => (
            <span
              key={id}
              className="px-4 py-1.5 text-xs font-medium bg-[#576cbc]/10 text-[#a5d7e8] rounded-full border border-[#576cbc]/30"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#576cbc] hover:bg-[#4359a3] py-3 rounded-2xl font-medium transition-colors"
          >
            Live Demo
          </a>
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-[#576cbc] hover:bg-white/10 py-3 rounded-2xl font-medium transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
