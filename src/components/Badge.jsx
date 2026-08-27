function Badge({ children, color = "red" }) {
    const colors = {
        red: "bg-red-100 text-red-700",
        green: "bg-green-100 text-green-700",
        yellow: "bg-yellow-100 text-yellow-700",
    };
    
    return <span className={`text-sm font-semibold px-2 py-1 rounded-full ${colors[color]}`}>{children}</span>;
}

export default Badge;