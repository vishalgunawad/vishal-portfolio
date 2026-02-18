const GithubStats = () => {
    return (
        <section id="github" className="py-24 px-6 text-center">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-8 text-center">GitHub Activity</h2>

            <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-6 rounded-2xl">
                <img
                    src="https://ghchart.rshah.org/vishalgunawad"
                    alt="GitHub Contributions"
                    className="w-full"
                />
            </div>
        </section>
    );
};

export default GithubStats;
