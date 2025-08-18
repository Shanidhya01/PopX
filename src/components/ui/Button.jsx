const primaryStyles =
  "bg-primary text-white hover:bg-violet-900 cursor-pointer";
const secondaryStyles =
  "bg-secondary text-violet-900 hover:bg-violet-500 hover:text-white cursor-pointer";
const disabledStyles = "cursor-not-allowed bg-neutral-400 text-white";

export const Button = ({ text, disabled = false, variant, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick} // forward onClick
      className={`${
        disabled
          ? "cursor-not-allowed bg-neutral-400 text-white"
          : variant === "primary"
          ? "bg-primary text-white hover:bg-violet-900 cursor-pointer"
          : "bg-secondary text-violet-900 hover:bg-violet-500 hover:text-white cursor-pointer"
      } w-full rounded-md px-[16px] py-[10px] text-[14px] font-semibold`}
    >
      {text}
    </button>
  );
};
