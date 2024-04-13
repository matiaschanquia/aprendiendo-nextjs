export default async function Productos() {
	const resFetch = await fetch("https://jsonplaceholder.typicode.com/comments");
	const comments = await resFetch.json();
	
	return (
		<div>
			<h1>Productos</h1>
			<h2>Comentarios</h2>
			<ul>
				{
					comments.map((comment: any) => (
						<li key={comment.id}>
							<p>{comment.id} - {comment.body}</p>
						</li>
					))
				}
			</ul>
		</div>
	);
}