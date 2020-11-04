const fs = require('fs');


genders = ['F', 'M'];
maleNames =['Florian', 'Jonas', 'Nico', 'Johannes' ];
femaleNames = ['Clara', 'Ingrid', 'Christina', 'Isabel'];
lastNames = ['Schwarz', 'Garcia','Weiger', 'Tomasi'];

const randChoice = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

const people = [];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = (gender == 'F') ? randChoice(femaleNames) : randChoice(maleNames);
    //Number between 18 and 78
    const age = Math.floor(Math.random() * 78) + 18;
    const lastName = randChoice(lastNames);

    const person = {
        gender,
        firstName,
        lastName,
        age,
    };
    people.push(person);
};


const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  {/**

OKREŚLENIE ILOŚCI ITERACJI W PĘTLI: 
    https://javascript.info/while-for

    i = 0 - Executes once upon entering the loop
    i < 3 - Checked before every loop iteration. If false, the loop stops.
    alert(i) - Runs again and again while the condition is truthy.
    i ++ - Executes after the body on each iteration.

    for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
    }

WYLOSOWANIE PRZYPADKOWEJ LICZBY

Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10





*/}