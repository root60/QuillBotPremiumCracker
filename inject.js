/*
 * Futuristic QuillBot Extension - Enhanced by RedHydra
 * Credits: Beautiful cyberpunk theme integration
 */
chrome = chrome ?? browser; 

// Original QuillBot script injection
const e = document.createElement("script"); 
e.src = chrome.runtime.getURL("quillbot.js"), 
e.onload = function () { e.remove() }, 
document.documentElement.prepend(e);

// Inject futuristic CSS theme safely, even if the head tag isn't available yet
const cssElement = document.createElement("link");
cssElement.rel = "stylesheet";
cssElement.type = "text/css";
cssElement.href = chrome.runtime.getURL("futuristic-theme.css");

// Determine a safe place to append head resources. If document.head isn't available yet
// (possible at document_start), fall back to the documentElement. The CSS will still
// apply globally.
const safeHead = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
safeHead.appendChild(cssElement);

// Add loading animation and focus effects. Use the same safe head location.
const style = document.createElement('style');
style.textContent = `
    @keyframes futuristicLoad {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    body { animation: futuristicLoad 0.8s ease-out; }
    *:focus { outline: 2px solid #00ffff !important; outline-offset: 2px !important; box-shadow: 0 0 10px #00ffff33 !important; }
    
    /* Hide old green circular icons on the right side */
    [class*="floating"], [class*="Floating"],
    [class*="action-button"], [class*="ActionButton"],
    [class*="side-button"], [class*="SideButton"],
    button[style*="background"][style*="green"],
    div[style*="background"][style*="green"][style*="circle"],
    svg[style*="green"] + button,
    button:has(svg path[d*="M12"]):has(svg path[d*="M9"]),
    /* Target common icon patterns */
    button[aria-label*="feedback"],
    button[aria-label*="suggestion"],
    button[aria-label*="help"],
    /* Hide any floating action buttons */
    [role="button"][style*="position: fixed"][style*="right"],
    [role="button"][style*="position: absolute"][style*="right"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
    }
    
    /* More specific targeting for QuillBot's floating buttons */
    div[class*="MuiButtonBase-root"][class*="MuiIconButton-root"]:nth-last-child(-n+3),
    button[class*="MuiButtonBase-root"][class*="MuiIconButton-root"]:nth-last-child(-n+3) {
        display: none !important;
    }
`;
safeHead.appendChild(style);

// Additional script to remove floating buttons and inject custom buttons
(function() {
    let customButtonsContainer = null;
    
    const removeOldButtons = () => {
        // Find and remove floating action buttons
        const allButtons = document.querySelectorAll('button, [role="button"], div[class*="Button"]');
        allButtons.forEach(btn => {
            const style = window.getComputedStyle(btn);
            const rect = btn.getBoundingClientRect();
            // Check if button is on the right side and has green background
            if (rect.right > window.innerWidth * 0.85 && 
                (style.backgroundColor.includes('rgb(0, 255') || 
                 style.backgroundColor.includes('rgb(76, 175') ||
                 btn.querySelector('svg') !== null)) {
                // Check if it's one of the three circular buttons
                if (btn.offsetHeight === btn.offsetWidth && btn.offsetHeight > 40) {
                    btn.style.display = 'none';
                    btn.remove();
                }
            }
        });
    };
    
    const createCustomButtons = () => {
        // Remove existing custom buttons container if any
        if (customButtonsContainer) {
            customButtonsContainer.remove();
        }
        
        // Create container for custom buttons
        customButtonsContainer = document.createElement('div');
        customButtonsContainer.id = 'quillbot-custom-buttons';
        customButtonsContainer.style.cssText = `
            position: fixed;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 15px;
            animation: slideInRight 0.5s ease-out;
        `;
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateY(-50%) translateX(100px); opacity: 0; }
                to { transform: translateY(-50%) translateX(0); opacity: 1; }
            }
            #quillbot-custom-buttons button {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: none;
                background: linear-gradient(45deg, #00ffff, #00cccc);
                color: #0a0a1a;
                font-size: 24px;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(0, 255, 255, 0.4);
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }
            #quillbot-custom-buttons button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(0, 255, 255, 0.6);
            }
            #quillbot-custom-buttons button:active {
                transform: scale(0.95);
            }
        `;
        if (!document.getElementById('custom-buttons-style')) {
            style.id = 'custom-buttons-style';
            // Append to a safe head if available, fallback to documentElement
            const headTarget = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
            headTarget.appendChild(style);
        }
        
        // Create GitHub button (replaces all social links)
        const githubBtn = document.createElement('button');
        githubBtn.innerHTML = '🐙';
        githubBtn.title = 'Visit GitHub Repository';
        githubBtn.onclick = () => window.open('https://github.com/root60', '_blank');
        customButtonsContainer.appendChild(githubBtn);
        
        // Append to body or fallback to documentElement if body isn't available yet
        const parentElement = document.body || document.documentElement;
        parentElement.appendChild(customButtonsContainer);
    };
    
    const init = () => {
        removeOldButtons();
        setTimeout(createCustomButtons, 1000); // Wait for page to load
    };
    
    // Run immediately and on DOM changes
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Use MutationObserver to catch dynamically added buttons
    const observer = new MutationObserver(() => {
        removeOldButtons();
        if (!customButtonsContainer || !document.body.contains(customButtonsContainer)) {
            createCustomButtons();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Also run periodically to catch any missed buttons
    setInterval(() => {
        removeOldButtons();
        if (!customButtonsContainer || !document.body.contains(customButtonsContainer)) {
            createCustomButtons();
        }
    }, 2000);
})();

// Original event listener
window.addEventListener("QuillBot-Premium-Crack-Send", (async function ({ detail: e }) { 
    window.dispatchEvent(new CustomEvent("QuillBot-Premium-Crack-Receive", { 
        detail: await chrome.runtime.sendMessage(e) 
    })) 
}), !1);

// Credits console log
// Updated credits
console.log("🚀 Futuristic QuillBot Extension - Enhanced by RedHydra");