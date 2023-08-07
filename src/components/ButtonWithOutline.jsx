const ButtonWithOutline = ({ text }) => {
  return (
    <button
      type="button"
      className="mt-4 inline-flex items-center rounded-full bg-[#1C1C1C]  border border-[#26E2FF]  px-6 py-2 text-base font-medium text-white shadow-sm"
    >
      {text}
    </button>
  );
};

export default ButtonWithOutline;
