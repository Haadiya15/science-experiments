// Function to randomly select questions
function getRandomQuestions(pool, num) {
    let shuffled = pool.sort(() => 0.5 - Math.random());  // Shuffle the array
    return shuffled.slice(0, num);  // Pick the first 'num' questions
}

// Pool of 40 questions 
const questionPool = [
    { question: "What is H2O?", options: ["Oxygen", "Water", "Hydrogen", "Helium"], answer: "Water" },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Saturn", "Venus"], answer: "Mars" },
    { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: "8" },
    { question: "What is the pH of pure water?", options: ["5", "7", "9", "12"], answer: "7" },
    { question: "What is Newton's First Law also called?", options: ["Law of Inertia", "Law of Motion", "Law of Gravity", "Law of Thermodynamics"], answer: "Law of Inertia" },
    { question: "What force pulls objects towards the center of the Earth?", options: ["Friction", "Magnetism", "Gravity", "Tension"], answer: "Gravity" },
    { question: "Which gas is necessary for combustion?", options: ["Oxygen", "Carbon Dioxide", "Helium", "Nitrogen"], answer: "Oxygen" },
    { question: "What instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], answer: "Thermometer" },
    { question: "Which part of the plant is responsible for photosynthesis?", options: ["Roots", "Stem", "Leaves", "Flowers"], answer: "Leaves" },
    { question: "What is the unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Newton" },
    { question: "Which type of energy is stored in food?", options: ["Kinetic Energy", "Thermal Energy", "Chemical Energy", "Potential Energy"], answer: "Chemical Energy" },
    { question: "What is the boiling point of water at sea level?", options: ["50°C", "100°C", "150°C", "200°C"], answer: "100°C" },
    { question: "Which part of the atom carries a positive charge?", options: ["Electron", "Neutron", "Proton", "Molecule"], answer: "Proton" },
    { question: "Which vitamin is produced by the body when exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
    { question: "What is the process of liquid changing into gas called?", options: ["Condensation", "Evaporation", "Sublimation", "Freezing"], answer: "Evaporation" },
    { question: "What type of rock is formed from lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Fossil"], answer: "Igneous" },
    { question: "Which gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "What is the main function of red blood cells?", options: ["Fight infections", "Clot blood", "Carry oxygen", "Absorb nutrients"], answer: "Carry oxygen" },
    { question: "Which organ is responsible for pumping blood in the body?", options: ["Liver", "Heart", "Lungs", "Kidneys"], answer: "Heart" },
    { question: "Which element is needed for strong bones?", options: ["Iron", "Calcium", "Zinc", "Sodium"], answer: "Calcium" },
    { question: "What part of the plant grows underground?", options: ["Leaves", "Flowers", "Stem", "Roots"], answer: "Roots" },
    { question: "What metal is the best conductor of electricity?", options: ["Copper", "Iron", "Aluminum", "Silver"], answer: "Silver" },
    { question: "What causes the Earth's seasons?", options: ["The Moon's gravity", "The Sun’s brightness", "Earth’s tilt", "Earth’s speed"], answer: "Earth’s tilt" },
    { question: "Which of these is a non-renewable energy source?", options: ["Solar power", "Wind energy", "Coal", "Hydroelectric"], answer: "Coal" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Neptune"], answer: "Jupiter" },
    { question: "Which scientist developed the Theory of Relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: "Albert Einstein" },
    { question: "What type of simple machine is a seesaw?", options: ["Lever", "Pulley", "Wheel and Axle", "Inclined Plane"], answer: "Lever" },
    { question: "What is the main gas found in the air we breathe?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: "Nitrogen" },
    { question: "Which part of the human body helps to detect taste?", options: ["Ears", "Nose", "Tongue", "Skin"], answer: "Tongue" },
    { question: "Which blood type is known as the universal donor?", options: ["A", "B", "O", "AB"], answer: "O" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"], answer: "Mitochondria" },
    { question: "Which planet is closest to the Sun?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: "Mercury" },
    { question: "What gas makes up most of the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" }
];


// Get a new random selection of 10 questions every time the page loads
let selectedQuestions = getRandomQuestions(questionPool, 10);
let currentQuestionIndex = 0;
let score = 0;

// Function to display a question
function displayQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        return showFinalScore();
    }

    const questionObj = selectedQuestions[currentQuestionIndex];
    document.getElementById("question-text").innerText = `Q${currentQuestionIndex + 1}: ${questionObj.question}`;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear previous options

    questionObj.options.forEach(option => {
        const div = document.createElement("div");

        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "quiz-option";
        radioBtn.value = option;
        
        const label = document.createElement("label");
        label.innerText = option;

        div.appendChild(radioBtn);
        div.appendChild(label);
        optionsContainer.appendChild(div);
    });

    // Hide "Submit" button until the last question
    document.getElementById("submit-btn").style.display = (currentQuestionIndex === 9) ? "block" : "none";
}

// Function to handle "Next" button click
document.getElementById("next-btn").addEventListener("click", function() {
    const selectedOption = document.querySelector("input[name='quiz-option']:checked");

    if (!selectedOption) {
        alert("Please select an answer before proceeding!");
        return;
    }

    // Check if the selected answer is correct
    if (selectedOption.value === selectedQuestions[currentQuestionIndex].answer) {
        score++;
    }

    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < 10) {
        displayQuestion();
    } else {
        showFinalScore();
    }
});

// Function to display final score
function showFinalScore() {
    document.getElementById("quiz-container").innerHTML = `<h2>Your Score: ${score}/10</h2>`;
}

// Display first question on page load
displayQuestion();

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let valid = true;

    // NIC validation (e.g., must have 14 characters)
    let nic = document.getElementById("nic").value;
    if (nic.length !== 14) {
        document.getElementById("nicError").innerText = "NIC must be 14 characters.";
        valid = false;
    } else {
        document.getElementById("nicError").innerText = "";
    }

    // Name validation (only letters)
    let nameRegex = /^[A-Za-z]+$/;
    let firstName = document.getElementById("firstName").value;
    let surname = document.getElementById("surname").value;
    
    if (!nameRegex.test(firstName)) {
        document.getElementById("firstNameError").innerText = "First name must contain only letters.";
        valid = false;
    } else {
        document.getElementById("firstNameError").innerText = "";
    }

    if (!nameRegex.test(surname)) {
        document.getElementById("surnameError").innerText = "Surname must contain only letters.";
        valid = false;
    } else {
        document.getElementById("surnameError").innerText = "";
    }

    // Phone validation (must be 7 digits)
    let phone = document.getElementById("phone").value;
    if (!/^\d{7}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone must be 7 digits.";
        valid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    // Email validation
    let email = document.getElementById("email").value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Username validation (more than 8 characters)
    let username = document.getElementById("username").value;
    if (username.length < 8) {
        document.getElementById("usernameError").innerText = "Username must be at least 8 characters.";
        valid = false;
    } else {
        document.getElementById("usernameError").innerText = "";
    }

    // Password validation
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
    }

    if (!valid) {
        event.preventDefault(); // Stop form submission if validation fails
    } else {
        alert("Registration successful!");
        window.location.href = "nextpage.html"; // Redirect on success
    }
});

// Reset button warning
document.getElementById("resetButton").addEventListener("click", function(event) {
    if (!confirm("Are you sure you want to reset the form?")) {
        event.preventDefault();
    }
});

