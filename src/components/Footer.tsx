import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-purple-800 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-extrabold text-yellow-300 mb-4">
                            Mirai<span className="text-white">Nime</span>
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Temukan anime terbaik sesuai selera kamu. Dari shounen penuh aksi hingga slice of life yang menenangkan, kami punya rekomendasi yang tepat untukmu.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-purple-800 transition-colors cursor-pointer">
                                <span className="text-sm font-bold">f</span>
                            </div>
                            <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-purple-800 transition-colors cursor-pointer">
                                <span className="text-sm font-bold">t</span>
                            </div>
                            <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-purple-800 transition-colors cursor-pointer">
                                <span className="text-sm font-bold">i</span>
                            </div>
                            <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center hover:bg-yellow-300 hover:text-purple-800 transition-colors cursor-pointer">
                                <span className="text-sm font-bold">y</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-yellow-300 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-yellow-300 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/recommendation" className="text-gray-300 hover:text-yellow-300 transition-colors">
                                    Recommendations
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
                                    Genres
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold text-yellow-300 mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
                                    Romance
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
                                    Fantasy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">
                                    Slice of Life
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-purple-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2024 MiraiNime. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
