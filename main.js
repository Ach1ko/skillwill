// Pirveli Davaleba ------

const modalButton = document.getElementById('modalButton');

const modal = document.getElementById('modal');
const modalBack = document.getElementById('modalBack');

const closeButton = document.getElementsByClassName('close')[0];

function openModal() {
  modal.style.display = 'block';
  modalBack.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
  modalBack.style.display = 'none';
}

modalButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

modalBack.addEventListener('click', closeModal);

// Meore Davaleba ------

const colorInput = document.getElementById('colorInput');
const changeColorButton = document.getElementById('changeColorButton');

function changeBackgroundColor() {
  const color = colorInput.value.toLowerCase();
  if (color === 'red' || color === 'blue' || color === 'green' || color === 'black' || color === 'white') {
    document.body.style.backgroundColor = color;
  } else {
    alert('Only Red, Blue or Green.');
  }
  colorInput.value = '';
}
changeColorButton.addEventListener('click', changeBackgroundColor);

// Mesame Davaleba ------

const numbersInput = document.getElementById('numbersInput');
const calculateAverageButton = document.getElementById('calculateAverageButton');
const averageResult = document.getElementById('averageResult');
function calculateAverage() {
  const numbersString = numbersInput.value;
  const numbersArray = numbersString.split(':');
  const numbers = numbersArray.map(Number);
  if (numbers.length > 0 && numbersArray.length > 0) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    averageResult.textContent = `The Average is: ${average.toFixed(2)}`;
  } else {
    averageResult.textContent = 'Not Valid';
  }
  numbersInput.value = '';
}

calculateAverageButton.addEventListener('click', calculateAverage);

