import { Link } from "react-router-dom";

function About() {
    return (
        <section className="pt-28 pb-16 bg-gradient-to-b from-purple-50 to-white">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4">About MiraiNime</h1>
                <p className="text-gray-700 text-lg leading-8 mb-8">
                    MiraiNime adalah tempat kamu menemukan rekomendasi anime terbaik, daftar genre,
                    dan inspirasi tontonan berikutnya. Kami mengkurasi koleksi anime populer dan favorit
                    penggemar untuk memudahkan kamu menemukan sesuatu yang baru.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-white border border-purple-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-purple-700 mb-2">Misi</h2>
                        <p className="text-gray-700 leading-7">
                            Memberikan pengalaman penjelajahan anime yang cepat, sederhana, dan menyenangkan.
                            Kami fokus pada tampilan yang bersih, navigasi intuitif, dan konten yang relevan.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl bg-white border border-purple-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-purple-700 mb-2">Fitur</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-7">
                            <li>Rekomendasi anime pilihan</li>
                            <li>Eksplorasi berdasarkan genre</li>
                            <li>UI modern dan responsif</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10">
                    <Link to="/" className="inline-block px-6 py-3 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-semibold transition-colors">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;


