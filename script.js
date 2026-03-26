document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('chatbot-trigger');
    const chatWindow = document.getElementById('chat-window');
    const chatBody = document.getElementById('chat-body');

    trigger.addEventListener('click', () => {
        chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
    });

    window.chatAnswer = (type) => {
        let response = "";
        if (type === 'services') {
            response = "We specialize in AI Chatbots, CRM Automations, and SEO-driven lead generation. Would you like to see our service catalog?";
        } else if (type === 'pricing') {
            response = "Our automation packages are custom-tailored. Basic setups start from ₹25,000. Want a free audit?";
        }
        
        const msg = document.createElement('div');
        msg.className = 'chat-msg msg-bot';
        msg.innerText = response;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    };
});
