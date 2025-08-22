// Constants
const BASE_NUMBER = 42;

// DOM Elements
const analyzeBtn = document.getElementById('analyzeBtn');
const resultsSection = document.getElementById('resultsSection');

// Input elements
const userNameInput = document.getElementById('userName');
const userNumberInput = document.getElementById('userNumber');
const userSentenceInput = document.getElementById('userSentence');
const fruit1Input = document.getElementById('fruit1');
const fruit2Input = document.getElementById('fruit2');
const fruit3Input = document.getElementById('fruit3');

// Result display elements
const displayUserNumber = document.getElementById('displayUserNumber');
const sumResult = document.getElementById('sumResult');
const differenceResult = document.getElementById('differenceResult');
const productResult = document.getElementById('productResult');
const quotientResult = document.getElementById('quotientResult');
const originalSentence = document.getElementById('originalSentence');
const uppercaseResult = document.getElementById('uppercaseResult');
const lowercaseResult = document.getElementById('lowercaseResult');
const ifResult = document.getElementById('ifResult');
const ternaryResult = document.getElementById('ternaryResult');
const forLoopResult = document.getElementById('forLoopResult');
const greetingResult = document.getElementById('greetingResult');
const fruitsDisplay = document.getElementById('fruitsDisplay');
const arrayLength = document.getElementById('arrayLength');

// Functions
function greetUser(name) {
    return `Hello, ${name}!`;
}

function validateInputs() {
    const name = userNameInput.value.trim();
    const number = parseFloat(userNumberInput.value);
    const sentence = userSentenceInput.value.trim();
    const f1 = fruit1Input.value.trim();
    const f2 = fruit2Input.value.trim();
    const f3 = fruit3Input.value.trim();

    if (!name || isNaN(number) || !sentence || !f1 || !f2 || !f3) {
        alert('Please fill in all fields with valid data.');
        return false;
    }
    return true;
}

function performArithmetic(number) {
    return {
        sum: BASE_NUMBER + number,
        difference: BASE_NUMBER - number,
        product: BASE_NUMBER * number,
        quotient: number !== 0 ? (BASE_NUMBER / number).toFixed(2) : '∞'
    };
}

function performStringOperations(sentence) {
    return {
        uppercase: sentence.toUpperCase(),
        lowercase: sentence.toLowerCase()
    };
}

function checkNumberConditions(number) {
    // If statement approach
    let ifResultText;
    if (number > 0) {
        ifResultText = "The number is positive";
    } else if (number < 0) {
        ifResultText = "The number is negative";
    } else {
        ifResultText = "The number is zero";
    }

    // Ternary operator approach
    const ternaryResultText = number > 0 ? "The number is positive" : 
                             number < 0 ? "The number is negative" : 
                             "The number is zero";

    return {
        ifResult: ifResultText,
        ternaryResult: ternaryResultText
    };
}

function generateForLoop(number) {
    const numbers = [];
    const maxDisplay = Math.min(Math.abs(number), 20); // Limit display to 20 numbers
    
    for (let i = 1; i <= maxDisplay; i++) {
        numbers.push(i);
    }
    
    return numbers;
}

function createFruitsArray() {
    return [
        fruit1Input.value.trim(),
        fruit2Input.value.trim(),
        fruit3Input.value.trim()
    ];
}

function displayArithmeticResults(arithmetic, userNumber) {
    displayUserNumber.textContent = userNumber;
    sumResult.textContent = arithmetic.sum;
    differenceResult.textContent = arithmetic.difference;
    productResult.textContent = arithmetic.product;
    quotientResult.textContent = arithmetic.quotient;
}

function displayStringResults(stringOps, originalText) {
    originalSentence.textContent = originalText;
    uppercaseResult.textContent = stringOps.uppercase;
    lowercaseResult.textContent = stringOps.lowercase;
}

function displayConditionalResults(conditions) {
    ifResult.textContent = conditions.ifResult;
    ternaryResult.textContent = conditions.ternaryResult;
}

function displayForLoopResults(numbers, originalNumber) {
    const container = forLoopResult;
    container.innerHTML = '';
    
    if (numbers.length === 0 || originalNumber <= 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.textContent = 'No numbers to display (enter a positive number)';
        emptyDiv.style.color = '#6b7280';
        emptyDiv.style.fontStyle = 'italic';
        container.appendChild(emptyDiv);
        return;
    }
    
    numbers.forEach(num => {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = num;
        container.appendChild(numberDiv);
    });
    
    // Add ellipsis if there are more numbers
    if (originalNumber > 20) {
        const ellipsisDiv = document.createElement('div');
        ellipsisDiv.textContent = `... and ${originalNumber - 20} more numbers`;
        ellipsisDiv.className = 'ellipsis';
        container.appendChild(ellipsisDiv);
    }
}

function displayFunctionAndArrayResults(name, fruits) {
    // Display greeting
    const greeting = greetUser(name);
    greetingResult.textContent = greeting;
    
    // Display fruits array
    fruitsDisplay.innerHTML = '';
    fruits.forEach(fruit => {
        const fruitTag = document.createElement('span');
        fruitTag.className = 'fruit-tag';
        fruitTag.innerHTML = `🍎 ${fruit}`;
        fruitsDisplay.appendChild(fruitTag);
    });
    
    // Display array length
    arrayLength.textContent = fruits.length;
}

function analyzeData() {
    // Validate all inputs
    if (!validateInputs()) {
        return;
    }
    
    // Get input values
    const name = userNameInput.value.trim();
    const number = parseFloat(userNumberInput.value);
    const sentence = userSentenceInput.value.trim();
    
    // 1. Variables & Constants, Arithmetic
    const arithmetic = performArithmetic(number);
    displayArithmeticResults(arithmetic, number);
    
    // 2. Strings & String Methods
    const stringOps = performStringOperations(sentence);
    displayStringResults(stringOps, sentence);
    
    // 3. If Statements & Ternary Operator
    const conditions = checkNumberConditions(number);
    displayConditionalResults(conditions);
    
    // 4. Loops - For loop
    const forLoopNumbers = generateForLoop(number);
    displayForLoopResults(forLoopNumbers, number);
    
    // 5. Functions & Arrays
    const fruits = createFruitsArray();
    displayFunctionAndArrayResults(name, fruits);
    
    // Show results section with animation
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Event listeners
analyzeBtn.addEventListener('click', analyzeData);

// Allow Enter key to trigger analysis
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        analyzeData();
    }
});

// Add some interactive feedback for inputs
const inputs = [userNameInput, userNumberInput, userSentenceInput, fruit1Input, fruit2Input, fruit3Input];

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#059669';
        this.style.boxShadow = '0 0 0 3px rgba(5, 150, 105, 0.1)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#d1d5db';
        this.style.boxShadow = 'none';
    });
});

// Console output for demonstration (optional - can be removed)
console.log('🍎 Fruit & Number Analyzer Loaded!');
console.log('BASE_NUMBER constant:', BASE_NUMBER);

// Example of while loop (for demonstration in console)
console.log('While loop countdown demonstration:');
let countdown = 5;
while (countdown >= 0) {
    console.log(countdown);
    countdown--;
}