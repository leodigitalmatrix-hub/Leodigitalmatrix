/**
 * LEO DIGITAL MATRIX - MASTER ENGINE
 * Handles Component Injection, Navigation Logic, and Chatbot Triage
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. UNIVERSAL COMPONENT INJECTOR
    const injectComponent = (id, file) => {
        const target = document.getElementById(id);
        if (target) {
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error(`Failed to load ${file}`);
                    return response.text();
                })
                .then(data => {
                    target.innerHTML = data;
                    
                    // Run logic specific to the component after it loads
                    if (id === 'header-placeholder') handleActiveLinks(target);
                    if (id === 'chatbot-placeholder') initChatbot();
                })
                .catch(err => console.error("Matrix Error:", err));
        }
    };

    // Initialize Injection
    injectComponent('header-placeholder', '/header.html');
    injectComponent('footer-placeholder', '/footer.html');
    injectComponent('chatbot-placeholder', '/chatbot.html');

    // 2. SMART NAVIGATION (Highlight Active Page)
    function handleActiveLinks(headerElement) {
        const currentPath = window.location.pathname;
        const links = headerElement.querySelectorAll('.nav-links a');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            // Check if current path matches link href (handles root and full path)
            if (currentPath === href || (currentPath === '/' && href === '/index.html')) {
                link.classList.add('active-link');
                link.style.color = 'var(--primary)';
                link.style.opacity = '1';
                link.style.fontWeight = '700';
            }
        });
    }

    // 3. CHATBOT TRIAGE LOGIC
    function initChatbot() {
        const trigger = document.getElementById('chatbot-trigger');
        const chatWin = document.getElementById('chat-window');
        
        if (trigger && chatWin) {
            trigger.addEventListener('click', () => {
                chatWin.style.display = (chatWin.style.display === 'flex') ? 'none' : 'flex';
            });
        }
    }

    // Global function for chatbot buttons
    window.chatAnswer = (type) => {
        const body = document.getElementById('chat-body');
        if (!body) return;

        let response = "";
        if (type === 'leads') {
            response = "Excellent. Our AI Lead Engine automates prospecting. Should I send you our Real Estate or B2B case study?";
        } else if (type === 'save-time') {
            response = "Smart move. We use n8n and Make to bridge your apps. Would you like a free 'Process Map' call?";
        }

        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg msg-bot';
        msgDiv.style.animation = "fadeIn 0.3s ease";
        msgDiv.innerText = response;
        
        body.appendChild(msgDiv);
        body.scrollTop = body.scrollHeight;
    };
});
