import React from "react";

interface Anime {
    id: number;
    title: string;
    image: string;
    genre: string[];
    rating: number;
}

const Recommendation: React.FC = () => {
    const animeList: Anime[] = [
        {
            id: 1,
            title: "Attack on Titan",
            image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
            genre: ["Action", "Drama", "Fantasy"],
            rating: 9.0,
        },
        {
            id: 2,
            title: "Demon Slayer",
            image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
            genre: ["Action", "Adventure", "Supernatural"],
            rating: 8.8,
        },
        {
            id: 3,
            title: "Your Name",
            image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
            genre: ["Romance", "Drama", "Supernatural"],
            rating: 9.2,
        },
        {
            id: 4,
            title: "Jujutsu Kaisen",
            image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
            genre: ["Action", "Fantasy", "Shounen"],
            rating: 8.7,
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 lg:px-16 py-16">
            <div className="text-center mb-10">
                <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-blue-600">Recommended for You</h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">Discover anime that match your taste — handpicked just for you!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {animeList.map((anime) => (
                    <div key={anime.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                        <img src={anime.image} alt={anime.title} className="w-full h-60 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{anime.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{anime.genre.join(", ")}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-yellow-500 font-semibold">⭐ {anime.rating}</span>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendation;
