// A flag to ensure speech synthesis happens only once
let hasSpoken = false;

// Speak a welcome message and the about section text once on page load
function speakWelcome() {
    if (!hasSpoken) {
        const welcomeMessage = "Welcome to Stardust Cyborgs. Stardust Cyborgs is proud to share its affiliation and association with the Indian Space Research Organisation (ISRO). We are dedicated to supporting and contributing to the exploration of the cosmos, inspired by ISRO's groundbreaking missions.";
        const utterance = new SpeechSynthesisUtterance(welcomeMessage);
        speechSynthesis.speak(utterance);
        hasSpoken = true;
    }
}

// Call the speech function on page load
window.addEventListener('load', speakWelcome);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the target element
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the target element
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Check if the clicked link is the "Missions" link
        if (this.getAttribute('href') === '#missions') {
            loadISROMissions();
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
    missionsList.innerHTML = ''; // Clear existing content

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
