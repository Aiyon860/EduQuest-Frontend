import featuresatu from "@/assets/fitur1.png"
import featuresdua from "@/assets/fitur2.png"
import featureketiga from "@/assets/fitur3.png"

const Features = () => {
    return (
        <section className="bg-white p-2 m-2">
            <div>
                <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-900">Fitur</h2>
            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full max-w-md mx-auto md:mx-0 object-contain" src={featuresatu} alt="dashboard image" />
                <div className="mt-4 text-center md:text-left md:mt-0">
                    <div className="flex-col sm:flex-row items-center gap-4">
                        <h2 className="mb-4 text-2xl md:text-2xl tracking-tight font-bold text-gray-900">
                            Rekomendasi Belajar Personal
                        </h2>
                    </div>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">Tak perlu bingung. AI kami akan menganalisis kemampuan dan preferensimu untuk menyajikan materi belajar yang paling relevan, membuat belajarmu lebih fokus dan tepat sasaran.</p>
                </div>
            </div>

            <div className="gap-8 py-8 px-4 mx-auto max-w-screen-xl xl:gap-8 sm:py-16 lg:px-6">
                <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center">
                    <div className="order-1 md:order-2">
                        <img className="w-full max-w-md mx-auto md:mx-0 object-contain" src={featuresdua} alt="dashboard image" />
                    </div>
                    <div className="order-2 md:order-1 mt-4 text-center md:text-left md:mt-0">
                        <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-900">
                            Gamifikasi: Belajar Jadi Seru!
                        </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg">
                            Tingkatkan motivasimu! Bentuk kelompok belajar (Klan), bersaing secara sehat di Papan Peringkat, dan selesaikan Misi Harian untuk mendapatkan poin serta hadiah menarik.
                        </p>
                    </div>
                </div>
            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img
                    className="w-full max-w-md mx-auto md:mx-0 object-contain"
                    src={featureketiga}
                    alt="dashboard image"
                />
                <div className="mt-4 text-center md:text-left md:mt-0">
                    <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-900">
                        Ubah Catatanmu Jadi Kuis Instan
                    </h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">
                        Punya materi dari sekolah? Cukup unggah dokumen (PDF/Word) milikmu, dan biarkan AI secara ajaib mengubahnya menjadi soal latihan interaktif, lengkap dengan rangkuman poin-poin penting.
                    </p>
                </div>
            </div>

        </section>
    );
}
export default Features;
