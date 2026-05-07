def get_allergen_friendly_meals(meals, allergens):
   # Convert allergens list to pipe-separated string for easier string matching
   allergens = "|".join(allergens);
   
   # Filter meals: keep only those that don't contain any of the allergens
   # any(allergen in x[1] for allergen in allergens.split("|")) checks if any allergen is in the meal's ingredient list
   # not any(...) keeps meals where NO allergens are present
   # any() returns True if at least one allergen is found, so we negate it to keep meals that are safe
   allergenFriendlyMeals = filter(lambda x: not any(allergen in x[1] for allergen in allergens.split("|")), meals)

   # Extract only the meal names (index [0]) from the filtered meals and return as a list
   return list(map(lambda x: x[0], allergenFriendlyMeals))


print(
  get_allergen_friendly_meals(
    [
      ["pasta", ["wheat", "milk"]],
      ["salad", ["nuts"]],
    ],
    ["milk"],
  ),
); # ["salad"].
print(
  get_allergen_friendly_meals(
    [
      ["steak", ["soy"]],
      ["fried rice", []],
      ["fish tacos", ["fish", "wheat"]],
      ["chicken parmesan", ["wheat", "milk"]],
    ],
    ["soy", "fish"],
  ),
); # ["fried rice", "chicken parmesan"].
print(
  get_allergen_friendly_meals(
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
); # ["oatmeal", "granola", "toast"].
print(
  get_allergen_friendly_meals(
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
); # ["granola", "yogurt", "eggs"].
