function Button({ children, variant = "primary", className = "", ...props }) {
    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-700",
        outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
    };
  
    return (
        <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${variants[variant]} ${className}`} 
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;