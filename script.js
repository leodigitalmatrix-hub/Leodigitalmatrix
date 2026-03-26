document.addEventListener('DOMContentLoaded', () => {
    
    // 1. COMPONENT INJECTOR (Fetches global parts)
    const loadPart = (id, url) => {
        const target = document.getElementById(id);
        if (target) {
            fetch(url)
                .then(res => res.text())
                .then(html => {
                    target.innerHTML = html;
                    if (id === 'header-placeholder') highlightActive();
                    if (id === 'chatbot-placeholder') initChat();
                })
                .catch(err => console.error("Error loading component:", err));
        }
    };

    loadPart('header-placeholder', '/header.html');
    loadPart('footer-placeholder', '/footer.html');
    loadPart('chatbot-placeholder', '/chatbot.html');

    // 2. ACTIVE PAGE HIGHLIGHTER
    function highlightActive() {
        const path = window.location.pathname;
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('href') === path) {
                link.style.color = 'var(--primary)';
                link.style.opacity = '1';
                link.style.fontWeight = '700';
            }
        });
    }

    // 3. CHATBOT LOGIC
    function initChat() {
        const trigger = document.getElementById('chatbot-trigger');
        const win = document.getElementById('chat-window');
        if (trigger) {
            trigger.addEventListener('click', () => {
                win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }

    // Global Bot Answers
    window.chatAnswer = (goal) => {
        const body = document.getElementById('chat-body');
        let msg = goal === 'leads' ? "Our Lead Engine can scrap 500+ contacts/week. Ready for a trial?" : "We use n8n to auto-sync your CRM & WhatsApp. Save 10hrs/week.";
        
        const div = document.createElement('div');
        div.className = 'chat-msg msg-bot';
        div.innerText = msg;
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;
    };
});
