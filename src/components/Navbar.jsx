import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Skills", id: "skills", color: "from-violet-400 to-indigo-500" },
    { name: "Projects", id: "projects", color: "from-cyan-400 to-blue-500" },
    { name: "Experience", id: "experience", color: "from-sky-400 to-cyan-600" },
    { name: "Education", id: "education", color: "from-indigo-400 to-blue-600" },
    { name: "Achievements", id: "achievements", color: "from-amber-400 to-orange-500" },
    { name: "Certifications", id: "certifications", color: "from-purple-400 via-pink-400 to-red-400" },
    { name: "GitHub", id: "github", color: "from-emerald-400 to-teal-500" },
    { name: "LeetCode", id: "leetcode", color: "from-yellow-400 via-orange-400 to-red-500" },
    { name: "Contact", id: "contact", color: "from-teal-400 to-cyan-500" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Vishal.dev
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.id}`}
                            className="relative text-gray-300 hover:text-white transition duration-300 group"
                        >
                            {link.name}

                            {/* Colored underline */}
                            <span
                                className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r ${link.color} transition-all duration-300 group-hover:w-full`}
                            ></span>
                        </a>
                    ))}



                    {/* Resume Button */}
                    <a
                        href="/Vishal_Gunawad_Resume.pdf"
                        download
                        className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition duration-300"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-4"
                >
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.id}`}
                            onClick={() => setMenuOpen(false)}
                            className="block text-gray-300 hover:text-white transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
