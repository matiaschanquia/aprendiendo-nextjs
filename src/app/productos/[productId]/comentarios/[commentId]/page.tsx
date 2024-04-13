
export default function CommentDetail({ params }:
	{params: {
		productId: string;
		commentId: string;
	};}) {

	return (
		<div>
			<h1>Comentario {params.commentId} del producto {params.productId} </h1>
			{undefined}
		</div>
	);
}