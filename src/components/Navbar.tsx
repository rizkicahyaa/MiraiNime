import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-purple-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-extrabold text-white tracking-wide cursor-pointer select-none">
                    Mirai<span className="text-yellow-300">Nime</span>
                </Link>

                <ul className="hidden md:flex space-x-8 text-white font-medium">
                    <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                        <Link to="/recommendation">Recommendations</Link>
                    </li>
                    <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                        <Link to="/genre">Genres</Link>
                    </li>
                    <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-purple-700 border-t border-purple-600">
                    <ul className="flex flex-col space-y-4 px-6 py-4 text-white font-medium">
                        <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                        </li>
                        <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                            <Link to="/recommendation" onClick={() => setOpen(false)}>Recommendations</Link>
                        </li>
                        <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                            <Link to="/genre" onClick={() => setOpen(false)}>Genres</Link>
                        </li>
                        <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
