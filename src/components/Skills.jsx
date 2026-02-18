import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        "React", "NodeJS", "MongoDB", "Express", "Redux",
        "Python", "Selenium", "JWT", "Tailwind",
        "Socket.io", "Git", "Postman"
    ];

    return (
        <section id="skills" className="py-24 px-6">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent mb-8 text-center">Skills</h2>

            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/5 border border-white/10 px-5 py-3 rounded-full text-xl font-extrabold bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
