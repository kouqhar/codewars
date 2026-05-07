function getAllergenFriendlyMeals(meals, allergens) {
  allergens = allergens.join("|");

  const allergenFriendlyMeals = meals.filter(
    (meal) => !meal[1].join(" ").match(new RegExp(allergens, "g")),
  );

  return allergenFriendlyMeals.map((meal) => meal[0]);
}

console.log(
  getAllergenFriendlyMeals(
    [
      ["pasta", ["wheat", "milk"]],
      ["salad", ["nuts"]],
    ],
    ["milk"],
  ),
); // ["salad"].
console.log(
  getAllergenFriendlyMeals(
    [
      ["steak", ["soy"]],
      ["fried rice", []],
      ["fish tacos", ["fish", "wheat"]],
      ["chicken parmesan", ["wheat", "milk"]],
    ],
    ["soy", "fish"],
  ),
); // ["fried rice", "chicken parmesan"].
console.log(
  getAllergenFriendlyMeals(
    [
      ["oatmeal", ["nuts"]],
      ["pancakes", ["wheat", "milk"]],
      ["granola", []],
      ["yogurt", ["milk"]],
      ["eggs", ["eggs", "milk"]],
      ["toast", ["wheat"]],
    ],
    ["eggs", "milk"],
  ),
); // ["oatmeal", "granola", "toast"].
console.log(
  getAllergenFriendlyMeals(
    [
      ["oatmeal", ["nuts"]],
      ["pancakes", ["wheat", "milk"]],
      ["granola", []],
      ["yogurt", ["milk"]],
      ["eggs", ["eggs", "milk"]],
      ["toast", ["wheat"]],
    ],
    ["wheat", "nuts"],
  ),
); // ["granola", "yogurt", "eggs"].
