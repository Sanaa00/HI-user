/* eslint-disable react/prop-types */
import { Field } from 'formik';
// eslint-disable-next-line react/prop-types
function InputField({
  name,
  placeholder,
  value,
  onChange,
  id,
  type,
  accept,
  style,
}) {
  return (
    <Field
      style={style}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      type={type}
      multiple
      accept={accept}
      className="w-full lg:w-80 2xl:w-96  pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green 
      mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500"
    />
  );
}

export default InputField;
