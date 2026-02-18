import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
