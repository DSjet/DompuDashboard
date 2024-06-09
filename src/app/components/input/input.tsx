interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
const Input: React.FC<InputProps> = ({
  onChange = () => {},
  placeholder = "",
  className = "",
  name,
}) => {
  return (
    <input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={`border-[1px] border-gray-300 bg-gray-100 rounded-md py-2 px-4 text-base w-full ${className}`}
    />
  );
};

export default Input;
