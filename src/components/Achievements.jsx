import { motion } from "framer-motion";

const Achievements = () => {
    const achievements = [
        "Solved 1200+ problems across LeetCode, CodeChef & GFG.",
        "Top Typing Speed: 132 WPM (Average 115 WPM).",
        "Completed Freelance Web Automation Project using Python & Selenium.",
    ];

    return (
        <section className="py-24 px-6">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-8 text-center">Achievements</h2>


            <div className="max-w-4xl mx-auto space-y-6">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl"
                    >
                        <p className="text-gray-300 text-lg">
                            🚀 {item}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
