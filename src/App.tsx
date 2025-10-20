import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import TopPicks from "./components/TopPicks";
import Recommendation from "./pages/Recommendation";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <TopPicks />
                    </>
                } />
                <Route path="/recommendation" element={<Recommendation />} />
            </Routes>
        </div>
    );
}

export default App;
