const users = [
  { name: "C", age: 30 },
  { name: "A", age: 20 },
  { name: "B", age: 45 }
];

users.sort((a, b) => a.age - b.age);
// users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);







//   a.localeCompare(b, "en-US", { sensitivity: "case" })