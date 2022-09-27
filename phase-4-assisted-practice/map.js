const harryPotter = new Map();
harryPotter.set("Author", "Nandha");
harryPotter.set("SoldCopies", "10M");

console.log(harryPotter.has("10M")); //has only acts upon keys

// for (const [key, value] of harryPotter.entries()) {
//     console.log(key, value);
// }

// for (const key of harryPotter.keys()) {
//   console.log(key);
// }

// for (const value of harryPotter.values()) {
//   console.log(value);
// }

console.log(harryPotter.get("Author"));

console.log(harryPotter.delete("Author"));

console.log(harryPotter);

harryPotter.clear();

console.log(harryPotter);

console.log(harryPotter.size);