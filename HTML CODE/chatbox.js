function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    
    if (message === "") return; // Prevent empty messages

    let chatBox = document.getElementById("chat-box");

    // Create user message
    let userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.innerHTML = `<span class="message-text">${message}</span>
                             <span class="timestamp">${getTime()}</span>`;
    chatBox.appendChild(userMessage);

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    inputField.value = "";

    // Bot Typing Indicator
    let botTyping = document.createElement("div");
    botTyping.classList.add("chat-message", "bot", "typing");
    botTyping.textContent = "Typing...";
    chatBox.appendChild(botTyping);

    setTimeout(() => {
        chatBox.removeChild(botTyping); // Remove typing indicator

        let botMessage = document.createElement("div");
        botMessage.classList.add("chat-message", "bot");
        botMessage.innerHTML = `<span class="message-text">${getBotResponse(message)}</span>
                                <span class="timestamp">${getTime()}</span>`;
        chatBox.appendChild(botMessage);

        // Scroll to latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500); // Delay for typing effect
}

// Simple bot responses with random fun messages
function getBotResponse(input) {
    input = input.toLowerCase();

    let responses = {
        "hello": ["Hi there! 😊", "Hello! How's your day?", "Hey! What’s up?"],
        "how are you": ["I'm a bot, but I'm doing great! 🤖", "Feeling chatty!"],
        "bye": ["Goodbye! Have a great day! 🌟", "See you later! 👋"],
        "default": ["Hmm... Interesting! 🤔", "I’m not sure how to respond to that. 😅"]
    };

    for (let key in responses) {
        if (input.includes(key)) {
            let possibleResponses = responses[key];
            return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
        }
    }
    return responses["default"][Math.floor(Math.random() * responses["default"].length)];
}

// Get Current Time for Messages
function getTime() {
    let now = new Date();
    return now.getHours() + ":" + String(now.getMinutes()).padStart(2, '0');
}

// Allow sending message with "Enter" key
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
