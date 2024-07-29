import sql from "better-sqlite3";

const db = sql("meals.db");

// By making this function async we are making sure that the function returns a promise even though the db normally does not
export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating 2 sec delay

	// Used the line below to simulate an error being thrown by database
	// throw new Error("Loading Meals Failed");
	return db.prepare("SELECT * FROM meals").all();
}

export function getMealDetails(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
