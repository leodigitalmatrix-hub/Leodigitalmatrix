document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('chatbot-trigger');
    const chatWindow = document.getElementById('chat-window');
    const chatBody = document.getElementById('chat-body');

    if(trigger) {
        trigger.addEventListener('click', () => {
            chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    window.chatAnswer = (type) => {
        let response = type === 'services' ? "We offer AI, CRM, and Growth Funnels." : "Our packages start at ₹25k.";
        const msg = document.createElement('div');
        msg.className = 'chat-msg msg-bot';
        msg.innerText = response;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    };
});
