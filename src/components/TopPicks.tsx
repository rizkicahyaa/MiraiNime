import { motion } from "framer-motion";

interface Anime {
    id: number;
    title: string;
    genre: string;
    rating: number;
    description: string;
    image: string;
}

const animeList: Anime[] = [
    {
        id: 1,
        title: "Attack on Titan",
        genre: "Action, Drama",
        rating: 9.1,
        description: "Manusia berjuang melawan raksasa dalam dunia yang dipenuhi misteri.",
        image: "/images/aot.jpg",
    },
    {
        id: 2,
        title: "Demon Slayer",
        genre: "Action, Fantasy",
        rating: 8.9,
        description: "Tanjiro berjuang membasmi iblis untuk menyelamatkan adiknya.",
        image: "/images/demonslayer.jpg",
    },
    {
        id: 3,
        title: "Your Name",
        genre: "Romance, Fantasy",
        rating: 9.0,
        description: "Dua remaja saling terhubung melalui mimpi lintas ruang dan waktu.",
        image: "/images/yourname.jpg",
    },
    {
        id: 4,
        title: "Jujutsu Kaisen",
        genre: "Action, Supernatural",
        rating: 8.7,
        description: "Seorang siswa bergabung dengan sekolah sihir untuk melawan kutukan.",
        image: "/images/jujutsukaisen.jpg",
    },
];

const TopPicks = () => {
    return (
        <section className="bg-[#0f0f1b] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-300">Top Picks This Week</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">Temukan anime terbaik pilihan minggu ini, direkomendasikan berdasarkan rating dan popularitas.</p>
            </div>

            {/* Anime Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {animeList.map((anime) => (
                    <motion.div key={anime.id} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="bg-purple-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-yellow-300/40 transition-all">
                        <img src={anime.image} alt={anime.title} className="w-full h-56 object-cover" />
                        <div className="p-5 text-left">
                            <h3 className="text-xl font-bold mb-2 text-yellow-300">{anime.title}</h3>
                            <p className="text-sm text-gray-300 italic mb-2">{anime.genre}</p>
                            <p className="text-sm text-gray-200 mb-3">{anime.description}</p>
                            <span className="text-yellow-300 font-semibold">⭐ {anime.rating.toFixed(1)}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TopPicks;
