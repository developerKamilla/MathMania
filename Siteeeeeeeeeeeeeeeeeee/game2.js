const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");
input.focus();
let randomNum = Math.floor(Math.random() * 100);
chance = 10;
checkButton.addEventListener("click", () => {
  chance--;
  let inputValue = input.value;
  if (inputValue == randomNum) {
    [guess.textContent, input.disabled] = ["Вы угадали! Поздравляю", true];
    [checkButton.textContent, guess.style.color] = ["Заново", "#333"];
  } else if (inputValue > randomNum && inputValue < 100) {
    [guess.textContent, remainChances.textContent] = ["Загаданное число меньше", chance];
    guess.style.color = "#333";
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = ["Загаданное число больше", chance];
    guess.style.color = "#333";
  } else {
    [guess.textContent, remainChances.textContent] = ["Число вне диапозона", chance];
    guess.style.color = "#DE0611";
  }
  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = ["Заново", true, ""];
    [guess.textContent, guess.style.color] = ["Вы проиграли", "#DE0611"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});
