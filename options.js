const workTimeInput = document.getElementById('workTime');
const breakTimeInput = document.getElementById('breakTime');
const workMsgInput = document.getElementById('workMsg');
const breakMsgInput = document.getElementById('breakMsg');
const saveBtn = document.getElementById('save');
const statusMsg = document.getElementById('status-msg');

// Ładowanie zapisanych
chrome.storage.local.get(['settings'], (data) => {
  const s = data.settings || {};
  workTimeInput.value = s.workTime || 20;
  breakTimeInput.value = s.breakTime || 20;
  workMsgInput.value = s.workMsg || "Czas na pracę!";
  breakMsgInput.value = s.breakMsg || "Zadbaj o oczy!";
});

// Zapisywanie
saveBtn.addEventListener('click', () => {
  const newSettings = {
    workTime: parseInt(workTimeInput.value),
    breakTime: parseInt(breakTimeInput.value),
    workMsg: workMsgInput.value,
    breakMsg: breakMsgInput.value
  };

  chrome.storage.local.set({ settings: newSettings }, () => {
    // Informacja o zapisaniu
    statusMsg.style.opacity = '1';
    setTimeout(() => { statusMsg.style.opacity = '0'; }, 2000);
    
    // Reset licznika w tle, żeby przyjął nowe wartości przy następnym starcie
    chrome.storage.local.set({ status: 'stopped', timeLeft: newSettings.workTime * 60, mode: 'work' });
    chrome.alarms.clear('timerTick');
    chrome.action.setBadgeText({ text: '' });
  });
});