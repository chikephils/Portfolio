import React from "react";
import { Mail, FolderGit2, GitBranchIcon } from "lucide-react";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0a1428] py-20 border-t border-[#576cbc]/20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          I'm always open to new opportunities and interesting conversations.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:chikephils@gmail.com"
            className="group flex items-center gap-4 bg-[#19376d] hover:bg-[#576cbc] transition-colors px-6 py-5 rounded-2xl w-full md:w-auto"
          >
            <Mail className="w-6 h-6" />
            <div className="text-left">
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">chikephils@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/oreva-okumor"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#19376d] hover:bg-[#576cbc] transition-colors px-6 py-5 rounded-2xl w-full md:w-auto"
          >
            <img
              src={getImageUrl("Assets/linkedn.png")}
              alt="LinkedIn icon"
              className="w-7 h-7"
            />
            <div className="text-left">
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="font-medium">linkedin.com/in/oreva-okumor</p>
            </div>
          </a>

          <a
            href="https://github.com/chikephils"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#19376d] hover:bg-[#576cbc] transition-colors px-6 py-5 rounded-2xl w-full md:w-auto"
          >
            <img
              src={getImageUrl("Assets/github.png")}
              alt="Github icon"
              className="w-7 h-7"
            />
            <div className="text-left">
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="font-medium">github.com/chikephils</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
