import sql from "better-sqlite3";

const db = sql("meals.db");

// By making this function async we are making sure that the function returns a promise even though the db normally does not
export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating 2 sec delay
	return db.prepare("SELECT * FROM meals").all();
}
