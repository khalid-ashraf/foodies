export default function MealDetailsPage({ params }) {
	return (
		<main>
			<h1>Meals Details Page</h1>
			<p style={{ textAlign: "center", color: "white" }}>{params.mealSlug}</p>
		</main>
	);
}
