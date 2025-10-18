import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 pt-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    Find Your Next <br />
                    <span className="text-yellow-300">Favorite Anime</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-100 mb-8">Temukan rekomendasi anime terbaik sesuai selera kamu — dari shounen penuh aksi hingga slice of life yang menenangkan.</p>

                <div className="flex justify-center space-x-4">
                    <motion.button whileHover={{ scale: 1.05 }} className="bg-yellow-300 text-purple-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all">
                        Get Started
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.05 }} className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-all">
                        Learn More
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
