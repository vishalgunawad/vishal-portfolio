import { motion } from "framer-motion";
import { SiFreecodecamp } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

const certifications = [
    {
        title: "JavaScript Algorithms and Data Structures",
        platform: "freeCodeCamp",
        icon: <SiFreecodecamp className="text-green-400 text-4xl" />,
        link: "https://www.freecodecamp.org/certification/fccd3129c2f-e278-46ee-a341-0d9485edd162/javascript-algorithms-and-data-structures",
        description:
            "Comprehensive certification covering JavaScript fundamentals, ES6, OOP, functional programming, data structures, and algorithmic problem solving.",
        badgeColor: "from-green-500 to-emerald-600",
    },
    {
        title: "IT Security: Defense Against the Digital Dark Arts",
        platform: "Coursera (Google)",
        icon: <FaGoogle className="text-blue-400 text-4xl" />,
        link: "https://www.coursera.org/account/accomplishments/verify/HQSXUFMFPJHZ",
        description:
            "Covered cybersecurity principles, encryption, network security, system hardening, and digital threat defense mechanisms.",
        badgeColor: "from-blue-500 to-indigo-600",
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-28 px-6">

            {/* Heading */}
            <div className="text-center mb-20">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                    Certifications
                </h2>
                <p className="text-gray-300 mt-4 text-lg">
                    Continuous learning and professional development
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.04 }}
                        className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-lg hover:shadow-purple-500/20 transition duration-300"
                    >

                        {/* Badge Icon */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${cert.badgeColor}`}>
                                {cert.icon}
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {cert.platform}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6">
                            {cert.description}
                        </p>

                        {/* Button */}
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-block px-6 py-3 bg-gradient-to-r ${cert.badgeColor} rounded-full text-white font-semibold hover:scale-105 transition duration-300`}
                        >
                            View Certificate →
                        </a>

                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Certifications;
