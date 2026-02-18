import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ project }) => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            transitionSpeed={2500}
            className="rounded-2xl"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:shadow-cyan-500/20 hover:shadow-lg transition duration-300"
            >
                {/* Title */}
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-white/10 px-3 py-1 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-6">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-cyan-500 rounded-full hover:bg-cyan-600 transition text-sm"
                    >
                        View Code
                    </a>

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-pink-400 text-pink-400 rounded-full hover:bg-pink-400 hover:text-white transition text-sm"
                    >
                        Live Demo
                    </a>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default ProjectCard;
