const things = [
  "clock",
  2,
  2,
  [3, 4],
  [{ one: 1, two: 2 }],
  { first: { firstOne: 1.1, firstTwo: 1.2 } },
  () => {
    return [[123], { random: 123 }];
  },
];

// console.log(things[6]()[1].random);

var text = "Javascript adalah bahasa yang keren."
  .toLowerCase()
  .toUpperCase()
  .split("")
  .join("-");

// console.log(text);

const something = {
  number: 123,
  day: "sunday",
  pets: ["dogo", "cato"],
  person: {
    firstName: "Adam",
    lastName: "Maulana",
    pets: ["gator", "snake"],
  },
  whatDay: function () {
    console.log(this.day);
  },
  personPets: function () {
    console.log(this.person.pets);
    return this.pets;
  },
};

console.log(something.person.pets[0]);
console.log(something.personPets());
