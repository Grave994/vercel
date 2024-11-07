//Task 1
function toggleMode() {
    const container = document.getElementById('modeContainer');
    const button = document.getElementById('modeButton');

    if (container.classList.contains('dark-mode')) {
        container.classList.remove('dark-mode');
        container.classList.add('light-mode');
        button.textContent = "change to dark mode";
    } else {
        container.classList.remove('light-mode');
        container.classList.add('dark-mode');
        button.textContent = "change to light mode";
    }
}


//Task 2
function getReturnRandom() {
    const x = Math.floor(Math.random() * 1000);
    return `${x}`;
}

document.getElementById('generateBtn').addEventListener('click', function () {
    document.getElementById('randomNumber').textContent = getReturnRandom();
});


// Task 3
function getCurrentDateTime() {
    const data = new Date();

    const hours = String(data.getHours()).padStart(2, '0');
    const minutes = String(data.getMinutes()).padStart(2, '0');
    const seconds = String(data.getSeconds()).padStart(2, '0');

    const year = data.getFullYear();
    const month = data.getMonth();
    const day = data.getDate();

    const months = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun',
        'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ];


    return {
        time: `${hours}:${minutes}:${seconds}`,
        date: `${day} ${months[month]} ${year}`,
    };
}

document.getElementById('generateBtnTime').addEventListener('click', function () {
    const currentData = getCurrentDateTime();
    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.textContent = `${currentData.time} | ${currentData.date}`;
});

// Task 4
const passwordInput = document.querySelector('#password');
const validationMessage = document.querySelector('#validationMessage');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{5,}$/;

passwordInput.addEventListener('keyup', function () {
    const passwordValue = passwordInput.value;

    if (passwordValue.match(passwordRegex)) {
        validationMessage.textContent = "strong password";
        validationMessage.style.color = "green";

        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");
    } else {
        validationMessage.textContent = "week password";
        validationMessage.style.color = "red";

        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
    }
});



// Task 5
const button = document.querySelector('.toggle-btn');
const content = document.querySelector('.content');

button.addEventListener('click', () => {
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.innerText = 'hide text';
    } else {
        content.classList.add('hidden');
        button.innerText = 'show text';
    }
});