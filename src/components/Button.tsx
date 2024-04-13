"use client";
import { useRouter } from "next/navigation";

const Button = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push("/");
	};

	return (
		<button onClick={handleClick}>Regresar al home</button>
	);
};

export default Button;