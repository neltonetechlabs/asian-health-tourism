interface FloatingInputProps {
  inputKey: string;
  name: string;
  label: string;
  inputType?: "input" | "text";
  type?: string;
}
const FloatingInput: React.FC<FloatingInputProps> = ({
  inputKey,
  name,
  label,
  inputType = "input",
  type = "text"
}) => {
  return (
    <div className="relative z-0">
      {inputType === "text" ? (
        <textarea
          id={inputKey}
          className="block py-2.5 px-0 w-full text-sm text-[#263036] bg-transparent border-0 border-b border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
          placeholder=" "
          name={name}
          rows={4}
          required
        />
      ) : (
        <input
          type={type}
          id={inputKey}
          className="block py-2.5 px-0 w-full text-sm text-[#263036] bg-transparent border-0 border-b border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          name={name}
          required
        />
      )}
      <label
        htmlFor={inputKey}
        className="absolute text-sm text-[#263036] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
