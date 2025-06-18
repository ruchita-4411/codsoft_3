const display = document.getElementById('display');
const calculator = document.getElementById('calc');
const themeIcon = document.getElementById('themeIcon');

function append(value) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    const result = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    display.innerText = result;
  } catch {
    display.innerText = 'Error';
  }
}

function toggleTheme() {
  calculator.classList.toggle('dark-mode');

  if (calculator.classList.contains('dark-mode')) {
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
  } else {
    themeIcon.classList.remove('bx-sun');
    themeIcon.classList.add('bx-moon');
  }
}
