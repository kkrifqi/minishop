import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailProduk() {
    const { id } = useParams();
    const [produk, setProduk] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then(setProduk)
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Memuat...</p>;
    if (!produk) return <p>Produk tidak ditemukan</p>;

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white border rounded-lg shadow-sm mt-4">
            <div className="flex justify-center p-4">
                <img src={produk.image} className="w-full max-w-xs h-64 object-contain" />
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-bold text-slate-800">{produk.title}</h2>
                <p className="text-xl font-semibold text-slate-600 mt-2">$ {produk.price.toLocaleString("id-ID")}</p>
                <p className="mt-4 text-slate-700 leading-relaxed">{produk.description}</p>
            </div>
        </div>
    );
}

export default DetailProduk;