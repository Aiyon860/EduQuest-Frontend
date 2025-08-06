const ContactLabelInput = ({
  label,
  id,
  type,
  textarea,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type: string;
  textarea?: boolean;
  placeholder: string;
  required: boolean;
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 text-left"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder={placeholder}
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder={placeholder}
          required={required}
        />
      )}
    </>
  );
};

export default ContactLabelInput;