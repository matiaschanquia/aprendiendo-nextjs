import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
	title: "Contacto",
	description: "Estás en la sección de contacto",
};

export default function Contact() {

	return (
		<div>
			<h1>Contacto</h1>
			<Link href="/">Inicio</Link>
			<Button />
		</div>
	);
}