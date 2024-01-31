const TextareaField = ({ label, id, name, placeholder, className }) => {
  return (
    <label htmlFor={id} className={`text-gray-700 block ${className}`}>
      {label}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className="px-4 py-2 mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      ></textarea>
    </label>
  );
};

export default TextareaField;
