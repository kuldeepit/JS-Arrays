// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as array elements (Please note, you should add at least 5 names).
let myFavSuperheroes = ['Iron-Man', 'Batman', 'Superman', 'Spiderman', 'Thor'];

// Challenge 2: Print (in console) the first superhero's name in your array "myFavSuperheroes".
console.log(myFavSuperheroes[0]);

// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
console.log(myFavSuperheroes.length);

// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".
var len = myFavSuperheroes.length;
myFavSuperheroes[len - 2] = 'Kuldeep';
console.log(myFavSuperheroes[len - 2]);

// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
myFavSuperheroes.unshift('goli');

// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.
myFavSuperheroes.push('bandook');

// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
const friend1 = myFavSuperheroes.shift();

// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.
const friend2 = myFavSuperheroes.pop();

// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
myFavSuperheroes.splice(2, 0, friend1);

// Challenge 10: Remove the 4th and 5th elements in the array "myFavSuperheroes" and add your friend's name (friend 2) at the 4th position using the splice method.
myFavSuperheroes.splice(3, 2, friend2);

// Challenge 11: Create a nested array "superheroUniverse" and add 2 arrays to it, where the first array should contain the names of the Marvel superheroes and the second array should contain the names of the DC superheroes.
let superheroUniverse = [
  ['Iron-Man', 'Spiderman', 'Thor'],
  ['Batman', 'Superman'],
];

// Challenge 12: Print one of the Marvel superhero names from the array "superheroUniverse".
console.log(superheroUniverse[0][2]);

// Challenge 13: Print one of the DC superhero names from the array "superheroUniverse".
console.log(superheroUniverse[1][0]);
