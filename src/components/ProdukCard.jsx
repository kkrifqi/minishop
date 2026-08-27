import { Link } from "react-router-dom"
import { useKeranjang } from "../context/KeranjangContext";
import Button from "./Button";
import Badge from "./Badge";
import { memo } from "react";

function warnaRating(rate) {
    if (rate >= 4) return "green";
    if (rate >= 3) return "yellow";
    return "red";
}

function ProdukCard({ produk }) {
    const { tambahKeKeranjang } = useKeranjang();
    
    return (
        <div className="border rounded-lg p-4 bg-white flex flex-col hover:shadow-md transition-shadow duration-200">
            <div className="relative mb-4">
                <img src={produk.image} className="w-full h-48 object-contain rounded-md bg-white p-2" />
                <div className="absolute top-2 right-2">
                    <Badge color={warnaRating(produk.rating.rate)}>
                        Rate {produk.rating.rate}
                    </Badge>
                </div>
            </div>
            <h3 className="font-semibold text-slate-800 line-clamp-2 min-h-[3rem] mb-2">{produk.title}</h3>
            <p className="text-slate-600 font-medium text-lg mb-4 mt-auto">
                $ {produk.price.toLocaleString("id-ID")}
            </p>

            <div className="flex flex-col gap-2">
                <Button className="w-full" onClick={() => tambahKeKeranjang(produk)}>Tambah ke Keranjang</Button>
                <Link to={`/produk/${produk.id}`} className="w-full block">
                    <Button variant="outline" className="w-full">Lihat Detail</Button>
                </Link>
            </div>
        </div>
    );
}

export default memo(ProdukCard);