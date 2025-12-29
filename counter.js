// ===== CLOSURE MODULE =====
function Counter() {
  let counter = 0;

  function add() {
    counter++;
    return counter;
  }

  function reset() {
    counter = 0;
    return counter;
  }

  function get() {
    return counter;
  }

  return { add, reset, get };
}

// ===== DOM SETUP =====
const counterInstance = Counter(); // create one counter
const countDisplay = document.getElementById('countDisplay');
const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');

// Update display function
function updateDisplay() {
  countDisplay.textContent = counterInstance.get();
}

// Event listeners
addBtn.addEventListener('click', () => {
  counterInstance.add();
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  counterInstance.reset();
  updateDisplay();
});

// Initialize display
updateDisplay();