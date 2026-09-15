const TabGroup = ({
  label,
  options,
  value,
  onChange,
  columns = false,
}) => {
  return (
    <div className="space-y-3">
      {label && (
        <label className="block mb-3 text-[11px] uppercase tracking-[0.18em] text-[#9DAAA4]">
          {label}
        </label>
      )}

      <div
        className={`flex gap-1 rounded-full border border-[#26393A] bg-[#0B2021] p-1 ${
          columns ? 'flex-wrap' : 'overflow-x-auto'
        }`}
        role="group"
        aria-label={label}
      >
        {options.map((option) => {
          const isActive = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={isActive}
              className={`min-h-10 flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-[#E9EDE1] text-[#071516] shadow-sm'
                  : 'text-[#91A09C] hover:bg-[#13292A] hover:text-[#E9EDE1]'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabGroup;