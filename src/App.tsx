import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopPicks from "./components/TopPicks";
import Recommendation from "./pages/Recommendation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <TopPicks />
                        </>
                    } />
                    <Route path="/recommendation" element={<Recommendation />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
