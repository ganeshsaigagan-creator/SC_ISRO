// A flag to ensure speech synthesis happens only once
let hasSpoken = false;

// Speak a welcome message and the about section text once on page load
function speakWelcome() {
    if ('speechSynthesis' in window && !hasSpoken) {
        const welcomeMessage = "Welcome to Stardust Cyborgs. Stardust Cyborgs is proud to share its affiliation and association with the Indian Space Research Organisation (ISRO). We are dedicated to supporting and contributing to the exploration of the cosmos, inspired by ISRO's groundbreaking missions.";
        const utterance = new SpeechSynthesisUtterance(welcomeMessage);
        speechSynthesis.speak(utterance);
        hasSpoken = true;
    }
}

// Call the speech function on page load
window.addEventListener('load', speakWelcome);

// Smooth scrolling for all internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// An array of ISRO missions and their official links
const isroMissions = [
    { name: "Chandrayaan-1", description: "India's first mission to the Moon, which confirmed the presence of water.", url: "https://www.isro.gov.in/Chandrayaan_1.html" },
    { name: "Chandrayaan-2", description: "An orbiter, lander, and rover mission to explore the Moon's South Pole.", url: "https://www.isro.gov.in/Chandrayaan_2.html" },
    { name: "Chandrayaan-3", description: "A lunar mission that successfully landed a rover on the Moon's South Pole.", url: "https://www.isro.gov.in/Chandrayaan3_Details.html" },
    { name: "Mangalyaan (Mars Orbiter Mission)", description: "India's first interplanetary mission to Mars.", url: "https://www.isro.gov.in/MarsOrbiterMissionSpacecraft.html" },
    { name: "Gaganyaan", description: "India's first human spaceflight program.", url: "https://www.isro.gov.in/Gaganyaan.html" },
    { name: "Aditya-L1", description: "India's first solar mission to study the Sun from a halo orbit around the L1 point.", url: "https://www.isro.gov.in/Aditya_L1.html" },
];

// Function to dynamically load and display ISRO missions
function loadISROMissions() {
    const missionsList = document.querySelector('.missions-list');
    if (missionsList.children.length > 0) return;
    missionsList.innerHTML = '';

    isroMissions.forEach(mission => {
        const missionDiv = document.createElement('div');
        missionDiv.className = 'mission';
        missionDiv.innerHTML = `
            <h3>${mission.name}</h3>
            <p>${mission.description}</p>
            <a href="${mission.url}" target="_blank" class="btn">Learn More</a>
        `;
        missionsList.appendChild(missionDiv);
    });
}

// Event listener for the "Explore Missions" button in the body.
document.querySelector('.explore-missions-btn').addEventListener('click', loadISROMissions);

// Event listener for the "Missions" link in the navigation bar.
document.querySelector('a[href="#missions"]').addEventListener('click', loadISROMissions);

// Event listener for the "Visit ISRO Website" button
document.getElementById("isrobtn").addEventListener("click", function() {
    const form = this.closest('form');
    if (form.checkValidity()) {
        window.open("https://www.isro.gov.in/", "_blank");
    } else {
        const contactSection = document.getElementById('contact');
        let messageBox = contactSection.querySelector('.message-box');
        if (!messageBox) {
            messageBox = document.createElement('div');
            messageBox.className = 'message-box';
            messageBox.style.cssText = `
                background-color: #ffee01ff;
                color: black;
                padding: 10px;
                margin-top: 10px;
                border-radius: 5px;
            `;
            contactSection.querySelector('form').appendChild(messageBox);
        }
        messageBox.textContent = "Please fill out all fields before visiting ISRO.";
    }
});
