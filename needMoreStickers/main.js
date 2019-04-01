const calculator = document.querySelector('.calculator');
const input = document.getElementById('operations');
let operations = [];

calculator.addEventListener('click', e => {
  if (e.target.classList.contains('operator')) {
    addOperations(e.target.innerText);
  } else if (e.target.dataset.action === 'delete') {
    if (operations.length > 0) {
      operations.pop();
      drawInput();
    }
  }
});

function addOperations(operator) {
  const isOperationNumber = !isNaN(operator);
  const isLastOperationNumber = !isNaN(operations[operations.length - 1]);
  
  if (isOperationNumber) {
    operations.push(operator);
  } else {
    if (isLastOperationNumber) {
      operations.push(operator);
    }
  }
  
  drawInput();
}

calculator.addEventListener('submit', e => {
  e.preventDefault();  
  
  if (operations.length > 0) {
    const isLastOperationNaN = isNaN(operations[operations.length - 1]);

    if (isLastOperationNaN) {
      operations.pop();
    }

    calculate = new Function(`return ${operations.join('')}`);
    calcResult = calculate();
    
    operations = [calcResult];
    drawInput();
  }
});

calculator.addEventListener('reset', e => {
  e.preventDefault();
  operations = [];
  drawInput();
});

function drawInput() {
  input.value = operations.reduce((str, v) => {
    if (!isNaN(str[str.length - 1]) && isNaN(v)) {
      return `${str} ${v} `;
    } else {
      return str + v;
    }
  }, '');
}
