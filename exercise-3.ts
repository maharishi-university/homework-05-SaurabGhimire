export interface Root {
    recipes: Recipe[]
    total: number
    skip: number
    limit: number
}

export interface Recipe {
    id: number
    name: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cuisine: string
    caloriesPerServing: number
    tags: string[]
    userId: number
    image: string
    rating: number
    reviewCount: number
    mealType: string[]
}

export async function printRecipe() {
    const res: Response = await fetch("https://dummyjson.com/recipes");
    const rootData: Root = await res.json();
    console.log("The list of recipes are as follows:")
    for (const recipe of rootData.recipes) {
        console.log(recipe.name);
    }
}