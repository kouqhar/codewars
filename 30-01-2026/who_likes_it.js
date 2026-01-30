function likes(names) {
  let likeText = ["this"],
    arrLength = names.length;

  if (arrLength <= 0) likeText.unshift("no one likes");
  else if (arrLength <= 1) likeText.unshift(`${names} likes`);
  else if (arrLength <= 3)
    likeText.unshift(
      names.slice(0, -1).join(", "),
      `and ${names[arrLength - 1]} like`,
    );
  else
    likeText.unshift(
      names.slice(0, 2).join(", "),
      `and ${arrLength - 2} others like`,
    );

  return likeText.join(" ").toString();
}

console.log(likes([])); // "no one likes this"
console.log(likes(["Peter"])); // "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"
