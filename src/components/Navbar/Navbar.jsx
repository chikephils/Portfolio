import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#04152d]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between ">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => scrollToSection("home")}
          className="text-3xl font-bold text-white hover:text-[#576cbc] transition-colors"
        >
          Oreva<span className="text-[#576cbc]">..</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#576cbc] transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-[#576cbc] transition-colors"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#576cbc] transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("education")}
              className="hover:text-[#576cbc] transition-colors"
            >
              Education
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#576cbc] transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#04152d] border-t border-white/10">
          <ul className="flex flex-col py-6 px-6 text-lg space-y-6">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
