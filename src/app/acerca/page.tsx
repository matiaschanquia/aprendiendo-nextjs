import { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
	title: {
		absolute: "Acerca",
	}
};

export default function Acerca() {
	return (
		<div>
			<h1>Acerca</h1>
			<Link href="/">Inicio</Link>
		</div>
	);
}