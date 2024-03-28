const obj = [
  {
    name: "John",
    age: 25,
    city: "Indore",
  },
  {
    name: "gourav",
    age: 26,
    city: "bhopal",
  },
  {
    name: "shivam",
    age: 21,
    city: "Agra",
  },
];

const filteredPersons = obj.filter((person) => person.age <= 25);

console.log(filteredPersons);

const data = filteredPersons.sort((a, b) => a.city.localeCompare(b.city));
console.log(data);
data.forEach((person) => {
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
});
