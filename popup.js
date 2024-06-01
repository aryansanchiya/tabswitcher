document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-listening').addEventListener('click', () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
  
        recognition.onresult = (event) => {
        const tabName = event.results[0][0].transcript;
        chrome.runtime.sendMessage({ type: 'SWITCH_TAB', tabName });
    };
  
        recognition.start();
  });
});
  