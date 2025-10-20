import React from "react";
import { motion } from "framer-motion";

interface Genre {
    id: number;
    name: string;
    description: string;
    color: string;
    icon: string;
    animeCount: number;
    popularAnime: string[];
}

const Genre: React.FC = () => {
    const genres: Genre[] = [
        {
            id: 1,
            name: "Action",
            description: "Anime dengan pertarungan epik, aksi yang menegangkan, dan adegan yang memacu adrenalin.",
            color: "from-red-500 to-orange-500",
            icon: "⚔️",
            animeCount: 150,
            popularAnime: ["Attack on Titan", "Demon Slayer", "Jujutsu Kaisen"]
        },
        {
            id: 2,
            name: "Romance",
            description: "Kisah cinta yang mengharukan, dari romansa sekolah hingga drama kehidupan.",
            color: "from-pink-500 to-rose-500",
            icon: "💕",
            animeCount: 120,
            popularAnime: ["Your Name", "Toradora", "Clannad"]
        },
        {
            id: 3,
            name: "Fantasy",
            description: "Dunia ajaib dengan sihir, makhluk fantasi, dan petualangan yang luar biasa.",
            color: "from-purple-500 to-indigo-500",
            icon: "🔮",
            animeCount: 180,
            popularAnime: ["Spirited Away", "Howl's Moving Castle", "Made in Abyss"]
        },
        {
            id: 4,
            name: "Slice of Life",
            description: "Kehidupan sehari-hari yang tenang, hangat, dan penuh dengan momen berharga.",
            color: "from-green-500 to-teal-500",
            icon: "🌸",
            animeCount: 90,
            popularAnime: ["K-On!", "Lucky Star", "Non Non Biyori"]
        },
        {
            id: 5,
            name: "Comedy",
            description: "Tawa dan hiburan yang menghibur, dari komedi slapstick hingga humor cerdas.",
            color: "from-yellow-500 to-orange-500",
            icon: "😂",
            animeCount: 110,
            popularAnime: ["Gintama", "One Punch Man", "Nichijou"]
        },
        {
            id: 6,
            name: "Drama",
            description: "Kisah emosional yang mendalam, dengan karakter yang kompleks dan plot yang menawan.",
            color: "from-blue-500 to-cyan-500",
            icon: "🎭",
            animeCount: 95,
            popularAnime: ["Violet Evergarden", "Anohana", "Your Lie in April"]
        },
        {
            id: 7,
            name: "Horror",
            description: "Ketegangan dan ketakutan yang memacu adrenalin dengan elemen supernatural.",
            color: "from-gray-600 to-red-600",
            icon: "👻",
            animeCount: 60,
            popularAnime: ["Another", "Higurashi", "Tokyo Ghoul"]
        },
        {
            id: 8,
            name: "Sci-Fi",
            description: "Futuristik dengan teknologi canggih, ruang angkasa, dan konsep sains yang menarik.",
            color: "from-cyan-500 to-blue-500",
            icon: "🚀",
            animeCount: 75,
            popularAnime: ["Ghost in the Shell", "Akira", "Steins;Gate"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#0f0f1b] text-white px-6 lg:px-16 py-20 pt-32">
            <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-yellow-300">Explore Genres</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Temukan anime favoritmu berdasarkan genre yang kamu sukai. Dari aksi yang menegangkan hingga romansa yang mengharukan.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {genres.map((genre, index) => (
                    <motion.div
                        key={genre.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{  delay: index * 0.1 }}
                        className="bg-purple-800 rounded-2xl shadow-lg hover:shadow-yellow-300/40 transition-all duration-300 overflow-hidden cursor-pointer group"
                    >
                        {/* Genre Header with Gradient */}
                        <div className={`h-24 bg-gradient-to-r ${genre.color} flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="relative z-10 text-center">
                                <div className="text-3xl mb-1">{genre.icon}</div>
                                <h3 className="text-xl font-bold text-white">{genre.name}</h3>
                            </div>
                        </div>

                        {/* Genre Content */}
                        <div className="p-5">
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                {genre.description}
                            </p>
                            
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-yellow-300 font-semibold text-sm">Popular Anime:</span>
                                    <span className="text-gray-400 text-xs">{genre.animeCount} titles</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                    {genre.popularAnime.map((anime, idx) => (
                                        <span key={idx} className="bg-purple-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                                            {anime}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-purple-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 group-hover:shadow-lg">
                                Explore {genre.name}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Featured Section */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold text-yellow-300 mb-6">Can't Decide?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Tidak tahu genre mana yang cocok untukmu? Coba fitur rekomendasi kami yang akan membantu menemukan anime sesuai selera kamu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        className="bg-yellow-300 hover:bg-yellow-400 text-purple-800 font-semibold px-8 py-3 rounded-full transition-colors"
                    >
                        Get Personalized Recommendations
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-purple-800 font-semibold px-8 py-3 rounded-full transition-colors"
                    >
                        Browse All Anime
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Genre;
