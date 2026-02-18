const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-600 bg-clip-text text-transparent mb-8 text-center">Experience</h2>

            <div className="max-w-4xl mx-auto space-y-10">

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-sky-400 to-cyan-600 bg-clip-text text-transparent">
                        MERN Intern – Ypsilon IT Solution
                    </h3>
                    <p className="text-gray-300 mb-4">2025</p>
                    <p>Worked on full-stack MERN applications with authentication & dashboards.</p>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-sky-400 to-cyan-600 bg-clip-text text-transparent">
                        Freelance Developer – Web Automation
                    </h3>
                    <p className="text-gray-300 mb-4">2024</p>
                    <p>Built web scraping & automation systems using Python & Selenium.</p>
                </div>

            </div>
        </section>
    );
};

export default Experience;
