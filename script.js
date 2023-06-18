// Завершите функцию isEighteenYearsOld, чтобы она возвращала true только в том случае, если возраст пользователя равен 18 лет. Если передается строка 18, функция должна возвращать false

console.log(
  "\n",
  "--------------------task. Вам есть 18 лет?--------------",
  "\n"
);

function isEighteenYearsOld(age) {
  console.log(age === 18);
  return age === 18;
}

// Sample usage (do not modify)
isEighteenYearsOld(10); // false
isEighteenYearsOld(25); // false

isEighteenYearsOld(18); // true
isEighteenYearsOld("18"); // false


// Список покупок
//https://codesandbox.io/s/shopping-project-da-mv7jt6?file=/src/js/message.js



// ### Задача
// Камень, ножницы, бумага! В случае ничьи возвращаем `Draw!`.
console.log(
  "\n",
  "--------------------Камень, ножницы, бумага --------------",
  "\n"
);

function rockPaperScissors(firstPlayer, secondPlayer) {
  let winner = "Draw!";
  if (firstPlayer === "rock" && secondPlayer === "scissors")
    winner = "Player 1 win";
  else if (firstPlayer === "rock" && secondPlayer === "paper")
    winner = "Player 2 win";
  else if (firstPlayer === "scissors" && secondPlayer === "paper")
    winner = "Player 1 win";
  else if (firstPlayer === "scissors" && secondPlayer === "rock")
    winner = "Player 2 win";
  else if (firstPlayer === "paper" && secondPlayer === "rock")
    winner = "Player 1 win";
  else if (firstPlayer === "paper" && secondPlayer === "scissors")
    winner = "Player 2 win";

  console.log(winner);
  return winner;
}

rockPaperScissors("scissors", "rock"); // "Player 2 win"
rockPaperScissors("rock", "scissors"); // "Player 1 win"
rockPaperScissors("scissors", "scissors"); // "Draw!"
rockPaperScissors("rock", "rock"); // "Draw!"
rockPaperScissors("paper", "rock"); // "Player 1 win"

// Дана строка слов. Необходимо вернуть длину самого короткого слова.
console.log("\n", "--------------------Длина слов--------------", "\n");

function findShort(message) {
  let str = message.split(" ");

  let minLenght = 1000;

  for (let i = 0; i < str.length; i++) {
    if (str[i].length < minLenght) minLenght = str[i].length;
  }
  console.log(minLenght);
}

findShort("bitcoin take over the world maybe who knows perhaps"); // 3
findShort("Let's travel abroad shall we"); // 2

// Функция принимает целое число и строку в качестве параметров. Необходимо вернуть строку, повторяющуюся n количество раз.

console.log("\n", "--------------------Повторяющаяся строка--------------", "\n");
function repeatStr(number, string) {
  let line = "";
	for(let i=0; i<number; i++){
    line=line+string;
  }
  console.log(line);
  return line;
}


repeatStr(6, 'I') // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Дана строка. Вам необходимо вернуть строку, каждое слово которой, будет с заглавной буквы.
console.log("\n", "--------------------Слова с заглавной буквы--------------", "\n");
function toJadenCase(string) {
	let str = string.split(" ");
  let UppStr = "";
  for (let i = 0; i < str.length; i++) {    
    UppStr = UppStr + str[i].at(0).toUpperCase() + str[i].substring(1);  
    if (i<str.length-1) UppStr=UppStr+" ";//чтобы добавлял пробел между словами, но не добавлял в конце
  }
  console.log(UppStr);
  return UppStr;

}


toJadenCase("How can mirrors be real if our eyes aren't real") // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Функция должна вернуть количество гласных в заданной строке. Мы будем рассматривать буквы a, e, i, o, u как гласные. Входная строка состоит только из строчных букв или пробелов.

console.log("\n", "--------------------Количество гласных--------------", "\n");
function getCount(str) {
	let numberVowels = 0;
  for (i=0; i<str.length; i++){
    if (str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u")
    numberVowels++;
  }
  console.log(numberVowels);
  return numberVowels;
}


getCount("abracadabra") // 5