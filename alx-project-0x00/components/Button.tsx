import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ shapes, width, title }) => {
    return (
        <button className={`bg-blue-500 hover:bg-blue-700 px-6 py-3 text-white ${width}  ${shapes}`}>
            {title}
        </button>
    )
}
export default Button;