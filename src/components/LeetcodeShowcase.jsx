import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
    { label: "Total Solved", value: 1200, color: "text-cyan-400" },
    { label: "Easy", value: 400, color: "text-green-400" },
    { label: "Medium", value: 650, color: "text-yellow-400" },
    { label: "Hard", value: 150, color: "text-red-400" },
];

const LeetcodeShowcase = () => {
    return (
        <section id="leetcode" className="py-32 px-6 relative">

            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                    LeetCode Performance
                </h2>
                <p className="text-gray-300 mt-4 text-lg">
                    Consistent problem solving and strong DSA foundation
                </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        whileHover={{ scale: 1.08 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-lg hover:shadow-yellow-500/20 transition duration-300"
                    >
                        <h3 className={`text-5xl font-bold mb-4 ${stat.color}`}>
                            <CountUp end={stat.value} duration={2.5} />+
                        </h3>
                        <p className="text-gray-300 text-lg">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Heatmap Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h3 className="text-3xl font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                    Activity Heatmap
                </h3>
                <p className="text-gray-300 mt-2">
                    Daily coding consistency visualization
                </p>
            </motion.div>

            {/* Heatmap Card */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-lg"
            >
                <img
                    src="https://leetcard.jacoblin.cool/vishalgunawad?ext=heatmap"
                    alt="LeetCode Activity Heatmap"
                    className="w-full rounded-xl"
                />
            </motion.div>

            {/* Profile Button */}
            <div className="text-center mt-14">
                <a
                    href="https://leetcode.com/u/vishalgunawad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-yellow-500/40 transition duration-300"
                >
                    View LeetCode Profile →
                </a>
            </div>

        </section>
    );
};

export default LeetcodeShowcase;
