// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: [hotel , 2022] because (.split()) method turns strings into arrays
// b) Verify and explain: ['H', 'o', 't', 'e','l', ' ', '2', '0','2', '2' ] i was kinda right turns the string into the array but split every single letter

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:`Hello,"LEARN Student"!` the greater is reuseable and you can maniuplate it into say any with the string interpolation
// b) Verify and explain: undefined - im at a loss, im guessing greeter is in the wrong input

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16] the numbers are .map so the values in the array can be changed
// b) Verify and explain: [8, 10, 12, 14, 16] as i stated .map can change the values in the array

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11, 13, 15] .filter will filter to show only odd numbers when run through a function
// b) Verify and explain: [ 11, 13, 15 ] creates a new array filled with elements that pass a test provided by a function.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:"JavaScript" im calling only the fist index in the array
// b) Verify and explain: "JavaScript"  so were using  myCodingSkills to call on the variable we use .languages
// to access the object variable and [0] to call on a value in the array

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: { student: 'George', cohort: 'Hotel', year: 2022 } the new vaiable calls on the class and give the (name) a value by input "gorge"
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2022 } i forgot to put the class but it is correct
