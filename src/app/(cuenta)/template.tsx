"use client";
import { useState } from "react";

export default function ProfileTemplate({
	children
}: {
	children: React.ReactNode;
}) {

	const [input, setInput] = useState("");

	return (
		<div>
			<h2>Rutas relativas a la Cuenta del Usuario</h2>
			{children}
			<input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Escribe algo..." />
		</div>
	);
}