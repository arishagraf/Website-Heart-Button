// начальное состояние — не можем рисовать
let weCanDraw = false;
// начальное состояние кнопки — «не нажата»
let isClicked = false;
// javascript здесь нашёл и выбрал элемент кнопки
let button = document.getElementsByTagName('button')[0];

// при клике по кнопке скрипт начинает выбирать
button.onclick = function() {
  if (isClicked) {
    // если состояние кнопки — «нажата», делай это
    button.classList = '';
    isClicked = false;
    weCanDraw = false;
  } else {
    // если состояние кнопки — «не нажата», делай это
    button.classList.add('clicked');
    isClicked = true;
    weCanDraw = true;
  }
}

function setup() {
  // создание полотна для рисования
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  // размер шрифта
  textSize(74);

  if (weCanDraw) {
    // если рисовать можно — рисуем
    text('🖤', mouseX, mouseY);
  }
}