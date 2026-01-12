const timeDisplay = document.getElementById('time-display');
const modeDisplay = document.getElementById('mode-display');
const btnToggle = document.getElementById('btn-toggle');
const btnReset = document.getElementById('btn-reset');
const btnOptions = document.getElementById('open-options');

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
}

function updateUI() {
  chrome.storage.local.get(['timeLeft', 'status', 'mode'], (data) => {
    // Czas
    timeDisplay.textContent = formatTime(data.timeLeft || 0);
    
    // Tryb i Style
    if (data.mode === 'break') {
      document.body.classList.add('mode-break');
      modeDisplay.textContent = "PRZERWA DLA OCZU";
    } else {
      document.body.classList.remove('mode-break');
      modeDisplay.textContent = data.status === 'running' ? "FOKUS (PRACA)" : "PAUZA";
    }

    // Przycisk
    if (data.status === 'running') {
      btnToggle.textContent = "STOP";
      btnToggle.classList.add('stop');
    } else {
      btnToggle.textContent = "START";
      btnToggle.classList.remove('stop');
    }
  });
}

// Odświeżanie UI co sekundę (tylko gdy popup jest otwarty)
setInterval(updateUI, 1000);
updateUI(); // Pierwsze wywołanie

// Obsługa przycisków
btnToggle.addEventListener('click', () => {
  chrome.storage.local.get(['status', 'settings', 'mode'], (data) => {
    if (data.status === 'running') {
      // ZATRZYMAJ
      chrome.storage.local.set({ status: 'stopped' });
      chrome.alarms.clear('timerTick');
      chrome.action.setBadgeText({ text: '' });
    } else {
      // START
      const settings = data.settings || { workTime: 20 };
      // Jeśli czas jest 0 lub null, ustaw startowy
      chrome.storage.local.get(['timeLeft'], (current) => {
        let timeToSet = current.timeLeft;
        if (!timeToSet || timeToSet <= 0) {
            timeToSet = settings.workTime * 60;
            chrome.storage.local.set({ mode: 'work' });
        }
        
        chrome.storage.local.set({ status: 'running', timeLeft: timeToSet });
        chrome.alarms.create('timerTick', { periodInMinutes: 1/60 }); // Alarm co 1 sekundę
      });
    }
    setTimeout(updateUI, 100);
  });
});

btnReset.addEventListener('click', () => {
    chrome.storage.local.get(['settings'], (data) => {
        const settings = data.settings || { workTime: 20 };
        chrome.alarms.clear('timerTick');
        chrome.storage.local.set({ 
            status: 'stopped', 
            mode: 'work',
            timeLeft: settings.workTime * 60 
        });
        chrome.action.setBadgeText({ text: '' });
        setTimeout(updateUI, 100);
    });
});

btnOptions.addEventListener('click', () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});