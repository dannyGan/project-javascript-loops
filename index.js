let iteration = 1

do {
  console.log(iteration)
  iteration += 5
} while (iteration < 100)

//============================================================================================================================

for (let index = 0; index <= 100; index += 10) {
    console.log(index)
  }

  //============================================================================================================================

  const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index]
  console.log(element)
}

//============================================================================================================================

let num1 = 4;
let counter = 0;
for (i = 1; i < num1; i++) {
        counter += num1 * i;
}
console.log(counter);

//============================================================================================================================

let num1 = 8;
let counter = 0;
for (i = 1; i < num1; i++) {
        counter += num1 * i;
}
console.log(counter);

//============================================================================================================================

sessionStorage.setItem('name', 'yourname');
let name = sessionStorage.getItem('name');
let string = '';
for (i = name.length - 1; i >= 0; i--) {
        string += name[i];
}
console.log(string);

var age = prompt('guess my age', 'try it out');

if (age == 100) {
        alert('gratz dude');
} else if (age <= 50) {
        alert('am i a baby?');
} else if (age < 100) {
        alert('young enough but not that young');
} else {
        alert('too olddddd');
}