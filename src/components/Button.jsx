// src/components/Button.jsx
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, link, type = "primary", icon = true, fullWidth = false }) => {
  let baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition duration-300 ease-in-out text-sm sm:text-base shadow-sm";

  let typeStyles = "";

  switch (type) {
    case "primary":
      typeStyles =
        "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-xl";
      break;
    case "outline":
      typeStyles =
        "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md";
      break;
    case "glass":
      typeStyles =
        "bg-white/10 backdrop-blur-md text-blue-500 border border-blue-400 hover:bg-blue-500/10 hover:text-white hover:shadow-md";
      break;
    default:
      typeStyles = "bg-gray-600 text-white hover:bg-gray-700";
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${typeStyles} ${fullWidth ? "w-full" : ""}`}
    >
      {text}
      {icon && <FaArrowRight className="text-sm mt-[1px]" />}
    </a>
  );
};

export default Button;
