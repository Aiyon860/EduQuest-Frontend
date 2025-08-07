const DetailMateri = () => {
    return (
        <section className="sm:ml-64">
            <div className="w-full px-4 py-10 max-w-screen-xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Materi Semester 1 <span className="font-normal">| IPA</span>
                    </h2>
                </div>

                <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3 mb-6">
                    <div className="bg-[#003566] text-white w-10 h-10 flex items-center justify-center rounded-md font-bold mr-4">
                        1
                    </div>
                    <span className="text-gray-900 font-medium text-base">
                        Proses Terjadinya Hujan
                    </span>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                    <div className="space-y-4 text-gray-800 text-justify text-sm leading-relaxed">
                        <p>
                            Proses terjadinya hujan berawal dari sinar matahari yang membawa
                            energi panas menyebabkan adanya proses evaporasi. Dalam proses
                            evaporasi, air yang berada di bumi (laut, danau, sungai serta badan
                            air lainnya) menguap karena panas tersebut lalu menghasilkan uap-uap
                            air. Uap-uap air terangkat ke udara dan mengalami proses kondensasi.
                        </p>
                        <p>
                            Dalam proses kondensasi, uap-uap air berubah menjadi embun yang
                            diakibatkan oleh suhu di sekitar uap air lebih rendah daripada titik
                            embun air. Suhu udara yang semakin tinggi membuat titik-titik dari
                            embun semakin banyak dan memadat lalu membentuk menjadi awan.
                        </p>
                        <p>
                            Adanya perbedaan tekanan udara di langit menyebabkan pergerakan udara
                            atau yang biasa kita kenal dengan angin. Angin menggerakkan awan yang
                            membawa butir-butir air menuju tempat dengan suhu yang lebih rendah.
                            Awan-awan yang terkumpul bergabung menjadi awan besar yang berwarna
                            kelabu (proses ini dinamakan koalensi).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailMateri;
