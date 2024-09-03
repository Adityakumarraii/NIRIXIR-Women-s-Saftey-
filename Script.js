function initMap() {
    // The location of an example place
    const location = { lat: -25.344, lng: 131.036 };
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location,
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Add more interactivity here if needed
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
 loginForm.style.marginLeft = "-50%";
 loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
 loginForm.style.marginLeft = "0%";
 loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
 signupBtn.click();
 return false;
});

/* unsual activity*/
// Optional: Add functionality to update or add messages dynamically

function addMessage(location, message, status) {
    const messageContainer = document.querySelector('.activity-section:first-child');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = `
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message}</p>
        <span class="status-symbol">${status}</span>
    `;
    messageContainer.appendChild(newMessage);
}

// Example usage
addMessage('New York City, NY', 'Suspicious person loitering near school.', '🟠');
// map ke liye code
// Initialize and add the map
function initMap() {
    // The location of New Delhi
    const newDelhi = { lat: 28.6139, lng: 77.2090 };
    
    // The map, centered at New Delhi
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: newDelhi,
    });
    
    // The marker, positioned at a specific location in New Delhi
    const alertLocation = { lat: 28.7041, lng: 77.1025 }; // Example: Connaught Place
    
    const marker = new google.maps.Marker({
        position: alertLocation,
        map: map,
        title: "Woman in Danger",
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red marker
        },
    });
    
    // Info window for the marker
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div>
                <h3>Alert: Woman in Danger</h3>
                <p><strong>Location:</strong> Connaught Place, New Delhi</p>
                <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                <button onclick="respondToAlert()">Respond</button>
            </div>
        `,
    });
    
    // Show info window on marker click
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    // Mouse hover effects using custom tooltip
    const tooltip = document.getElementById('tooltip');

    marker.addListener('mouseover', (event) => {
        tooltip.style.display = 'block';
        tooltip.style.left = `${event.domEvent.pageX + 10}px`;
        tooltip.style.top = `${event.domEvent.pageY + 10}px`;
        tooltip.innerHTML = "Woman in Danger at Connaught Place";
    });

    marker.addListener('mouseout', () => {
        tooltip.style.display = 'none';
    });

    // Optional: Automatically open the info window when the map loads
    // infoWindow.open(map, marker);
}

// Function to handle alert response (can be expanded as needed)
function respondToAlert() {
    alert("Response initiated! Help is on the way.");
}

// Ensure the initMap function is globally accessible
window.initMap = initMap;
//mapping ka js
document.getElementById('leftImage').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)';
});

document.getElementById('leftImage').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

document.getElementById('rightImage').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)';
});

document.getElementById('rightImage').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
// Select the images by their IDs
const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');

// Function to apply the zoom effect
function applyZoom(image) {
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.5)'; // 150% zoom
    });

    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)'; // Return to original size
    });
}

// Apply the zoom effect to both images
applyZoom(leftImage);
applyZoom(rightImage);
 

//details ka code.
// Example: Display an alert message when FIR is submitted
document.getElementById('fir-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('FIR Report submitted successfully!');
});
