import { products } from "./data";

export async function GET() {
	return Response.json(products);
}

export async function POST(req: Request) {
	const product = await req.json();
	const newProduct = {
		id: products.length + 1,
		...product
	};

	products.push(newProduct);

	return new Response(JSON.stringify(newProduct), {
		headers: {
			"Content-Type": "application/json"
		},
		status: 200
	});
}