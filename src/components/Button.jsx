function Button({ children, variant = "primary", className = "", ...props }) {
    const variants = {
        primary: "bg-[#0D3B66] text-white hover:bg-[#092b4a]",
        outline: "border border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66] hover:text-white",
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