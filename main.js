// Pirveli davaleba
const users = [{ name: 'Temo', age: 25 },{ name: 'Lasha', age: 21 },{ name: 'Ana', age: 28 }];

const youngest = users.reduce((acc, curr) => curr.age < acc.age ? curr : acc);

console.log(youngest.name);

// Meore davaleba

function oldUser(user) {
  const newUser = { ...user };
  return newUser;
}

const originalUser = { name: 'Dato', age: 25 };
const newUser = oldUser(originalUser);

console.log(newUser.name,newUser.age);

// Mesame davaleba

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function letsPlayGame() {
  let a, b;
  let tries = 0;

  while (true) {
    tries++;
    a = rollDice();
    b = rollDice();

    console.log(`Try ${tries}: A rolled ${a}, B rolled ${b}`);

  if (a === 3 && b === 3) {
    console.log('Tie!');
    break;
  } else if (a === 3) {
    console.log('A wins!');
    break;
  } else if (b === 3) {
    console.log('B wins!');
    break;
  }
  }
}

letsPlayGame();