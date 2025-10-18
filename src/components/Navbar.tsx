import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-purple-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-extrabold text-white tracking-wide cursor-pointer select-none">
                    Mirai<span className="text-yellow-300">Nime</span>
                </div>

                <ul className="hidden md:flex space-x-8 text-white font-medium">
                    <li className="hover:text-yellow-300 transition-colors cursor-pointer">Home</li>
                    <li className="hover:text-yellow-300 transition-colors cursor-pointer">Recommendations</li>
                    <li className="hover:text-yellow-300 transition-colors cursor-pointer">Genres</li>
                    <li className="hover:text-yellow-300 transition-colors cursor-pointer">About</li>
                </ul>

                <button className="hidden md:inline-block bg-yellow-300 text-purple-800 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 transition-all">Login</button>

                <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-purple-700 border-t border-purple-600">
                    <ul className="flex flex-col space-y-4 px-6 py-4 text-white font-medium">
                        <li className="hover:text-yellow-300 transition-colors cursor-pointer">Home</li>
                        <li className="hover:text-yellow-300 transition-colors cursor-pointer">Recommendations</li>
                        <li className="hover:text-yellow-300 transition-colors cursor-pointer">Genres</li>
                        <li className="hover:text-yellow-300 transition-colors cursor-pointer">About</li>
                        <button className="bg-yellow-300 text-purple-800 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 transition-all">Login</button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
