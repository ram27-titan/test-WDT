// 2
const apakahPrima = (angka) => {
  let pembagi = 0;
  for (let i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      pembagi++;
    }
  }

  if (pembagi == 2) {
    console.log('true');
  } else {
    console.log('false');
  }
};

apakahPrima(137);
apakahPrima(237);

// 3
const removeDuplicate = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];

let remove = [...new Set(removeDuplicate)];
console.log(remove);

// 4
let string1 = 'what';
let string2 = 'is';
let string3 = 'your';
let string4 = 'name';
let reversed1 = string1.split('').reverse().join('');
let reversed2 = string2.split('').reverse().join('');
let reversed3 = string3.split('').reverse().join('');
let reversed4 = string4.split('').reverse().join('');

console.log(reversed1, reversed2, reversed3, reversed4);

// 5

function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}

var someString = 'the quick brown fox jumps then quickly blow air';
console.log(firstNonRepeatedCharacter(someString));
