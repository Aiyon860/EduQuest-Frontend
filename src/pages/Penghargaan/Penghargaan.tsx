import { Award } from "lucide-react"
import BadgeGrid from "./Badge"

const Penghargaan = () => {
    return (
        <section>
            <div className="p-5 sm:ml-64">
                <div className="pt-10 pb-10">
                    <h2 className="text-2xl font-bold text-left text-gray-900">Penghargaan</h2>
                </div>

                <div className="bg-white rounded-md shadow-md p-4 mb-6 border-l-8 border-orange-500">
                    <h3 className="text-lg font-semibold mb-2 text-left">Terbaru</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-10 gap-2 mt-2 rounded-md p-2 w-full justify-items-start">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
                            >
                                <Award size={20} color="white" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-md shadow-md p-4 border-l-8 border-blue-800">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-left">Speed</h3>
                            <div>
                                <BadgeGrid />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-left">Completion</h3>
                            <div className="grid grid-cols-3 gap-2 mt-2 sm:grid-cols-5 rounded-md p-2 w-full justify-items-start">
                                {[...Array(10)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
                                    >
                                        <Award size={20} color="white" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Penghargaan;
