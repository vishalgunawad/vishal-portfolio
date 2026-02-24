import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center relative px-6 pt-32"
        >

            {/* Main Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Vishal Gunawad
                </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-xl md:text-2xl text-gray-300 font-medium"
            >
                <TypeAnimation
                    sequence={[
                        "MERN Stack Developer",
                        2000,
                        "Python Automation Developer",
                        2000,
                        "1200+ DSA Problems Solved",
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </motion.div>

            {/* Professional Summary */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed"
            >
                Passionate full-stack developer focused on building scalable web
                applications and intelligent automation solutions. Strong foundation
                in Data Structures & Algorithms with consistent problem-solving
                practice.
            </motion.p>

            {/* Highlights Badges */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-10 flex flex-wrap justify-center gap-4"
            >
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    🚀 MERN Stack
                </span>

                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    🧠 1200+ DSA Problems
                </span>

                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    🤖 Python + Selenium Automation
                </span>

                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    💼 MERN Intern
                </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12 flex flex-wrap justify-center gap-6"
            >
                <a
                    href="/Vishal_Resume.pdf"
                    download
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
                >
                    Download Resume
                </a>

                <a
                    href="#projects"
                    className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition duration-300"
                >
                    View Projects
                </a>
            </motion.div>

        </section>
    );
};

export default Hero;
