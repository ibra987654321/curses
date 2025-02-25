const SidebarButton = ({ active, onClick, icon, text, textColor = '#000', borderColor = 'gray-300' }) => {
    return (
        <button 
            className={`flex items-center w-full gap-2 py-2 px-4 rounded-2xl border border-${borderColor} ${active ? 'bg-[#C6A982]' : 'bg-white'}`} 
            onClick={onClick}
            style={{ color: textColor }}>
            {icon} {text}
        </button>
    );
};

export default SidebarButton