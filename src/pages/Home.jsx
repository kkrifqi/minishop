import { useState, useEffect } from "react";
import ProdukCard from "../components/ProdukCard";

function Home() {
    const [produk, setProduk] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [kataKunci, setKataKunci] = useState("");
    const [kategoriList, setKategoriList] = useState([]);
    const [kategoriTerpilih, setKategoriTerpilih] = useState("semua");

    const [halaman, setHalaman] = useState(1);
    const perHalaman = 6;

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then(setProduk)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then(setKategoriList);
    }, []);
    
    useEffect(() => {
        setHalaman(1);
    }, [kataKunci, kategoriTerpilih]);

    const produkTersaring = produk
        .filter((p) => p.title.toLowerCase().includes(kataKunci.toLowerCase()))
        .filter((p) => kategoriTerpilih === "semua" || p.category === kategoriTerpilih);

    const produkHalamanIni = produkTersaring.slice(
        (halaman - 1) * perHalaman,
        halaman * perHalaman
    );

    const totalHalaman = Math.ceil(produkTersaring.length / perHalaman);

    if (loading) return <p>Memuat produk...</p>;
    if (error) return <p>Terjadi kesalahan: {error}</p>;

    return (
        <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <input
                    className="flex-1 border rounded-md px-4 py-2 outline-none focus:border-slate-400 bg-white"
                    placeholder="Cari produk..."
                    value={kataKunci}
                    onChange={(e) => setKataKunci(e.target.value)}
                />

                <select 
                    className="border rounded-md px-4 py-2 outline-none focus:border-slate-400 bg-white capitalize"
                    value={kategoriTerpilih} 
                    onChange={(e) => setKategoriTerpilih(e.target.value)}
                >
                    <option value="semua">Semua Kategori</option>

                    {kategoriList.map((k) => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {produkHalamanIni.map((p) => <ProdukCard key={p.id} produk={p} />)}
            </div>

            <div className="mt-10 flex justify-center items-center gap-6">
                <button 
                    className="border rounded-md px-4 py-2 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    disabled={halaman === 1} 
                    onClick={() => setHalaman((h) => h - 1)}
                >
                    Sebelumnya
                </button>
                <span className="text-slate-600 font-medium">Halaman {halaman} dari {totalHalaman}</span>
                <button 
                    className="border rounded-md px-4 py-2 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    disabled={halaman === totalHalaman} 
                    onClick={() => setHalaman((h) => h + 1)}
                >
                    Selanjutnya
                </button>
            </div>
        </div>
    );
}

export default Home;