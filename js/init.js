// Entry point: initialize all features
import './codeSplash.js';
import './terminal.js';
import './main.js';
document.addEventListener('DOMContentLoaded', function() {
    if (window.flyGreenCode) window.flyGreenCode();
    if (typeof startFakeTerminalTyping === 'function') startFakeTerminalTyping();
    // ...other initializations from main.js...
});
