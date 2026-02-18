import { motion } from "framer-motion";

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech",
            institute: "M.I.T.S Gwalior",
            year: "2023",
            score: "CGPA: 7.42",
        },
        {
            degree: "12th",
            institute: "Brilliant Academy Hr Sec School",
            year: "2018",
            score: "73.20%",
        },
        {
            degree: "10th",
            institute: "Brilliant Academy Hr Sec School",
            year: "2016",
            score: "66%",
        },
    ];

    return (
        <section id="education" className="py-24 px-6">

            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-600 bg-clip-text text-transparent mb-8 text-center">Education</h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl text-center"
                    >
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                            {edu.degree}
                        </h3>

                        <p className="text-gray-300 mb-2">{edu.institute}</p>

                        <p className="text-gray-300">{edu.year}</p>
                        <p className="text-gray-300">{edu.score}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
