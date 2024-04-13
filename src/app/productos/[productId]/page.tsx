import { Metadata } from "next";

type Props = {params: {productId: string};};

export async function generateMetadata({ params } : Props, parent: Promise<Object>) : Promise<Metadata> {
	const parentObject = await parent;
	console.log(typeof parentObject);
	console.log(parentObject);
	
	return {
		title: `Producto ${params.productId}`
	};
} 

export default function ProductDetail({ params } : Props) {

	return (
		<h1>Producto { params.productId }</h1>
	);
}