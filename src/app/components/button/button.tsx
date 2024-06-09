interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
  variation?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick = () => {},
  className,
  variation = "primary",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`${
        variation == "primary"
          ? "bg-primary-0 hover:bg-primary-10 text-white"
          : "outline outline-1 outline-primary-0 hover:outline-primary-10 text-primary-0"
      } font-semibold py-2 px-4 rounded-lg w-full ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
