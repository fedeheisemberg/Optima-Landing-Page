const InputField = ({ label, id, name, type, placeholder, className }) => {
  return (
    <label htmlFor={id} className={`text-gray-700 block ${className}`}>
      {label}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="px-4 py-2 mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm hover:border-gray-400"
      />
    </label>
  );
};

export default InputField;
