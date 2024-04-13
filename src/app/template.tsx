
export default function HomeTemplate({
	children
}: {
	children: React.ReactNode;
}) {

	return (
		<div>
			<h3>Inicio Template en app</h3>
			{children}
			<h3>Final Template en app</h3>
		</div>
	);
}