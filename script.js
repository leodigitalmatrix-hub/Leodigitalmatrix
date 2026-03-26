document.addEventListener('DOMContentLoaded', () => {
    const loadPart = (id, url) => {
        const target = document.getElementById(id);
        if (target) {
            fetch(url)
                .then(res => res.text())
                .then(html => {
                    target.innerHTML = html;
                    if (id === 'header-placeholder') highlightActive();
                    if (id === 'chatbot-placeholder') initChat();
                });
        }
    };

    loadPart('header-placeholder', '/header.html');
    loadPart('footer-placeholder', '/footer.html');
    loadPart('chatbot-placeholder', '/chatbot.html');

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

    function initChat() {
        const trigger = document.getElementById('chatbot-trigger');
        const win = document.getElementById('chat-window');
        if (trigger) {
            trigger.addEventListener('click', () => {
                win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }

    window.chatAnswer = (goal) => {
        const body = document.getElementById('chat-body');
        let msg = goal === 'leads' ? "Our Lead Engine automates prospecting. Should I send you our Real Estate or B2B case study?" : "We use n8n to auto-sync your CRM & WhatsApp. Ready for a Process Audit?";
        const div = document.createElement('div');
        div.className = 'chat-msg msg-bot';
        div.innerText = msg;
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;
    };
});
