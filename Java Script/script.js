// Toggle the visibility of the chatbot container
function toggleChatbot() {
    const chatbotContainer = document.querySelector('.chatbot-container');
    chatbotContainer.classList.toggle('show-chatbot');
}

// Handle sending a message in the chatbot
function sendChat() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message) {
        const chatbotMessages = document.getElementById('chatbotMessages');
        
        // User message
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.innerHTML = `<p><strong>You:</strong> ${message}</p>`;
        chatbotMessages.appendChild(userMessage);
        
        input.value = ''; // Clear input field

        // Bot response (simulated)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('bot-message');
            botMessage.innerHTML = `<p><strong>Bot:</strong> Thanks for reaching out! How can I assist you further?</p>`;
            chatbotMessages.appendChild(botMessage);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to bottom
        }, 1000);
    }
}

// Handle form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formResponse = document.getElementById('formResponse');
    formResponse.innerHTML = 'Thank you for contacting us! We will get back to you shortly.';
    contactForm.reset();
});
