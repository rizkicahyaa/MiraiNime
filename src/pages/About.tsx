function About() {
    return (
        <section className="min-h-screen bg-[#0f0f1b] text-white px-6 lg:px-16 py-20 pt-32">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-300">About MiraiNime</h1>
                    <p className="text-gray-300 text-lg leading-8">
                        MiraiNime adalah tempat kamu menemukan rekomendasi anime terbaik, daftar genre,
                        dan inspirasi tontonan berikutnya. Kami mengkurasi koleksi anime populer dan favorit
                        penggemar untuk memudahkan kamu menemukan sesuatu yang baru.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-purple-800 border border-purple-700 shadow-lg">
                        <h2 className="text-2xl font-bold text-yellow-300 mb-2">Misi</h2>
                        <p className="text-gray-300 leading-7">
                            Memberikan pengalaman penjelajahan anime yang cepat, sederhana, dan menyenangkan.
                            Kami fokus pada tampilan yang bersih, navigasi intuitif, dan konten yang relevan.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-purple-800 border border-purple-700 shadow-lg">
                        <h2 className="text-2xl font-bold text-yellow-300 mb-2">Fitur</h2>
                        <ul className="list-disc list-inside text-gray-300 leading-7">
                            <li>Rekomendasi anime pilihan</li>
                            <li>Eksplorasi berdasarkan genre</li>
                            <li>UI modern dan responsif</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


