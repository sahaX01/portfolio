const Badge = ({ icon: Icon, label, color }) => {
  return (
    <div
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-md text-white text-sm font-medium 
        ${color}

        transition-all duration-300

        md:hover:scale-110 md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-black/20

        active:scale-95 active:opacity-80
      `}
    >
      <Icon size={16} />
      {label}
    </div>
  );
};

export default Badge;
