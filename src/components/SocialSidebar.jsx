import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const SocialSidebar = () => {
    return (
        <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
            className="fixed left-5 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 text-2xl z-50"
        >
            <a
                href="https://github.com/vishalgunawad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
            >
                <FaGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/vishal-gunawad-9813001b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
            >
                <FaLinkedin />
            </a>

            <a
                href="https://leetcode.com/u/vishalgunawad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
            >
                <SiLeetcode />
            </a>
        </motion.div>
    );
};

export default SocialSidebar;
