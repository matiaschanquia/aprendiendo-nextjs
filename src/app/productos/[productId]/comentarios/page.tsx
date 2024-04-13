export default function Comentarios({ params } : { params: {productId: string;}; }) {
	return (
		<div>
			<h1>Comentarios del producto {params.productId}</h1>
		</div>
	);
}