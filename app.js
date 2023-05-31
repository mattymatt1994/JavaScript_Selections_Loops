console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2) {
    console.log(`Congrats! It's odd: ${i}`);
  } else {
    console.log("Even numbers = trash");
  }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i <= 100; i++) {
  let input = " ";
  
  if (i % 3) {
    input += "FIZZ";
  
  }
  if (i % 5) {
    input += "BUZZ";
  }
 console.log(i, input);
};

//Exercise 3
console.log("EXERCISE 3");
let i = 1;
while (i <= 100) {
  if (i % 2 == 0) {
    console.log(`Congrats! It's odd: ${i}`);
  } else {
    console.log("Even numbers = trash");
  }
}

while (i <= 100) {
  if (i % 3 == 0) {
    console.log("FIZZ");
  } if (i % 5 == 0) {
    console.log("BUZZ");
  }
}
