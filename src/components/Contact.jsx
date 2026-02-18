import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
    return (
        <section className="py-28 px-6 text-center">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-12">
                Contact Me
            </h2>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl space-y-6"
            >
                <p className="text-gray-300 text-lg">
                    I'm open to internships, freelance projects, and full-time opportunities.
                    Feel free to reach out through any of the platforms below.
                </p>

                <div className="space-y-4 text-gray-400">
                    <p>
                        📧 Email:{" "}
                        <span className="text-white">
                            vishalgunawad@gmail.com
                        </span>
                    </p>

                    <p>
                        📞 Phone:{" "}
                        <span className="text-white">
                            +91-9669984730
                        </span>
                    </p>
                </div>

                <div className="flex justify-center gap-8 text-3xl mt-6">
                    <a
                        href="https://github.com/vishalgunawad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-400 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vishal-gunawad-9813001b5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://leetcode.com/u/vishalgunawad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                    >
                        <SiLeetcode />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
