const keyboardLayout = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['Space', 'Backspace']
    
];


const keyboardContainer = document.getElementById('keyboard');
const key1Contain = document.getElementById('key1');
const textInput = document.getElementById('text-input');

// Create keyboard keys
keyboardLayout.forEach(row => {
    const rowDiv = document.createElement('div');
    row.forEach(key => {
        const keyButton = document.createElement('button');
        keyButton.textContent = key;
        keyButton.classList.add('key');
        keyButton.addEventListener('click', () => handleKeyPress(key));
        rowDiv.appendChild(keyButton);
    });
    keyboardContainer.appendChild(rowDiv);
});

// Handle key press
function handleKeyPress(key) {
    if (key === 'Space') {
        textInput.value += ' ';
    } else if (key === 'Backspace') {
        textInput.value = textInput.value.slice(0, -1);
    } else {
        textInput.value += key;
    }
}
