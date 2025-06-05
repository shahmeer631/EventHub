// Sample event data
const events = [
    {
        id: 1,
        name: "Summer Music Festival",
        date: "June 15, 2024",
        time: "2:00 PM - 10:00 PM",
        location: "Central Park, New York",
        description: "Join us for a day of amazing music featuring top artists from around the world.",
        image: "https://picsum.photos/seed/concert/800/600"
    },
    {
        id: 2,
        name: "Tech Conference 2024",
        date: "July 20, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Convention Center, San Francisco",
        description: "A day of innovation and networking with industry leaders in technology.",
        image: "https://picsum.photos/seed/conference/800/600"
    },
    {
        id: 3,
        name: "Food & Wine Festival",
        date: "August 5, 2024",
        time: "12:00 PM - 8:00 PM",
        location: "Downtown District, Chicago",
        description: "Experience the finest cuisines and wines from local and international vendors.",
        image: "https://picsum.photos/seed/food/800/600"
    },
    {
        id: 4,
        name: "Art Exhibition",
        date: "September 10, 2024",
        time: "10:00 AM - 6:00 PM",
        location: "Modern Art Museum, Los Angeles",
        description: "Explore contemporary art from emerging and established artists.",
        image: "https://picsum.photos/seed/art/800/600"
    },
    {
        id: 5,
        name: "Comedy Show",
        date: "October 1, 2024",
        time: "7:00 PM - 9:00 PM",
        location: "The Laugh Factory, Los Angeles",
        description: "An evening of laughter with hilarious comedians.",
        image: "https://picsum.photos/seed/comedy/800/600"
    },
    {
        id: 6,
        name: "Yoga Workshop",
        date: "November 15, 2024",
        time: "9:00 AM - 12:00 PM",
        location: "Yoga Studio, San Diego",
        description: "A morning workshop focused on mindfulness and gentle yoga.",
        image: "https://picsum.photos/seed/yoga/800/600"
    }
];

// DOM Elements
const eventsContainer = document.getElementById('eventsContainer');
const searchInput = document.getElementById('searchInput');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Create Event Card
function createEventCard(event) {
    return `
        <div class="event-card">
            <img src="${event.image}" alt="${event.name}" class="event-image">
            <div class="event-content">
                <h3>${event.name}</h3>
                <div class="event-details">
                    <p><i class="fas fa-calendar"></i> ${event.date}</p>
                    <p><i class="fas fa-clock"></i> ${event.time}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <p>${event.description}</p>
                </div>
                <a href="#" class="register-btn">Register Now</a>
            </div>
        </div>
    `;
}

// Display Events
function displayEvents(eventsToShow = events) {
    eventsContainer.innerHTML = eventsToShow.map(event => createEventCard(event)).join('');
}

// Search Functionality
function searchEvents(query) {
    const filteredEvents = events.filter(event => 
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase())
    );
    displayEvents(filteredEvents);
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    searchEvents(e.target.value);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 