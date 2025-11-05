const inputBox = document.querySelector('.input-box');
const buttons = document.querySelectorAll('.btn');
const displayBox = document.querySelector('.display-box');

let arr = [];

// Function to update the display
function updateDisplay() {
  displayBox.textContent = `[ ${arr.join(', ')} ]`;
}

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = inputBox.value.trim();

    switch (button.textContent.trim()) {  // ✅ Fixed here
      case 'Push':
        if (value !== '') {
          arr.push(value);
          inputBox.value = '';
        } else {
          alert('Please enter a number first!');
        }
        break;

      case 'Unshift':
        if (value !== '') {
          arr.unshift(value);
          inputBox.value = '';
        } else {
          alert('Please enter a number first!');
        }
        break;

      case 'Pop':
        if (arr.length > 0) {
          arr.pop();
        } else {
          alert('Array is already empty!');
        }
        break;

      case 'Shift':
        if (arr.length > 0) {
          arr.shift();
        } else {
          alert('Array is already empty!');
        }
        break;
    }

    updateDisplay();
  });
});
