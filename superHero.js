const avengers = [
  {
    name: "Iron Man",
    realName: "Tony Stark",
    age: 48,
    primaryPower: "Genius-level intellect",
  },
  {
    name: "Captain America",
    realName: "Steve Rogers",
    age: 100,
    primaryPower: "Super Strength",
  },
  {
    name: "Thor Odinson",
    age: 1500,
    primaryPower: "Lightning",
  },
  {
    name: "Hulk",
    realName: "Bruce Banner",
    age: 49,
    primaryPower: "Super Strength",
  },
  {
    name: "Black Widow",
    realName: "Natasha Romanoff",
    age: 34,
    primaryPower: "Expert spy",
  },
  {
    name: "Hawkeye",
    realName: "Clint Barton",
    age: 35,
    primaryPower: "Master archer",
  },
];

for (let i of avengers) {
  console.log(i.name);

  for (let i of avengers) {
    if (i.primaryPower == "Super Strength") console.log(i.name, i.primaryPower);
  }
  for (let i of avengers) {
    if (i.age > 50) console.log(i.name, i.age);
  }
}
