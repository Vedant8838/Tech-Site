document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function () {
        const message = userInput.value.trim();
        if (message) {
            addMessage("You", message, "user-message");
            userInput.value = "";
            getBotResponse(message);
        }
    });

    function addMessage(sender, text, className) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("chat-message", className);
        msgDiv.innerHTML = `<b>${sender}:</b> ${text}`;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const apiKey = "YOUR_OPENAI_API_KEY";  // Replace with your OpenAI API key
        const url = "https://api.openai.com/v1/chat/completions";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            })
        })
        .then(response => response.json())
        .then(data => {
            const botResponse = data.choices[0].message.content;
            addMessage("Bot", botResponse, "bot-message");
        })
        .catch(error => {
            console.error("Error:", error);
            addMessage("Bot", "Sorry, I couldn't process your request.", "bot-message");
        });
    }
});
