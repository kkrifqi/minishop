import { useKeranjang } from "../context/KeranjangContext";
import Button from "../components/Button";

function Keranjang() {
    const { item, hapusDariKeranjang, ubahJumlah } = useKeranjang();
    const total = item.reduce((sum, p) => sum + p.price * (p.jumlah || 1), 0);

    if (item.length === 0) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Keranjang Belanja</h2>
                <p className="text-gray-500">kosong.</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-2xl mx-auto mt-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Keranjang Belanja</h2>

            <div className="flex flex-col gap-4">
                {item.map((p) => (
                    <div key={p.id} className="flex flex-col sm:flex-row items-center gap-4 border rounded-lg p-4 bg-white shadow-sm">
                        <img src={p.image} className="w-20 h-20 object-contain rounded bg-white" />

                        <div className="flex-1 text-center sm:text-left">
                            <h3 className="font-semibold text-slate-800">{p.title}</h3>
                            <p className="text-slate-600 font-medium mt-1">
                                $ {p.price.toLocaleString("id-ID")}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-4 sm:mt-0">
                            <input
                                type="number"
                                min={1}
                                value={p.jumlah || 1}
                                onChange={(e) => ubahJumlah(p.id, Number(e.target.value))}
                                className="w-16 border rounded px-2 py-1 text-center outline-none focus:border-slate-400"
                            />
                            <Button variant="outline" onClick={() => hapusDariKeranjang(p.id)}>Hapus</Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-right">
                <p className="text-lg font-bold">
                Total: $ {total.toLocaleString("id-ID")}
                </p>
            </div>
        </div>
    );
}

export default Keranjang;