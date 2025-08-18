export const Radio = ({ values, name, label, required = true, onChange }) => {
  return (
    <div className="text-[14px] flex flex-col gap-[8px] relative">
      <label className="absolute text-[12px] top-0 font-semibold -translate-y-1/2 bg-base px-[4px] text-black">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <div className="flex gap-[12px] mt-4">
        {values.map((val) => (
          <label key={val} className="flex gap-[4px] items-center">
            <input
              type="radio"
              name={name}
              value={val.toLowerCase()}
              onChange={onChange}
              required={required}
            />
            {val}
          </label>
        ))}
      </div>
    </div>
  );
};
