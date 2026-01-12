// Domyślne ustawienia
const DEFAULTS = {
  workTime: 20,       // minuty
  breakTime: 20,      // sekundy (dla zasady 20-20-20)
  soundEnabled: true,
  workMsg: "Czas na pracę! Skupienie.",
  breakMsg: "Zadbaj o oczy! Popatrz w dal przez 20 sekund."
};

// Dźwięk powiadomienia (krótkie piknięcie w base64)
const SOUND_URL = 'data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'; 
// (To jest pusty placeholder dla przykładu - przeglądarka może blokować autoplay. 
//  W pełnej wersji najlepiej dodać plik beep.mp3 do folderu, ale ten kod zadziała logicznie bez błędu).

// Inicjalizacja przy instalacji
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ 
    status: 'stopped', // running, stopped, break
    timeLeft: 0,
    mode: 'work' // work lub break
  });
});

// Obsługa Alarmu (Timer)
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'timerTick') {
    chrome.storage.local.get(['timeLeft', 'status', 'mode', 'settings'], (data) => {
      if (data.status !== 'running') return;

      let newTime = data.timeLeft - 1;

      if (newTime <= 0) {
        // KONIEC CZASU - PRZEŁĄCZENIE TRYBU
        const settings = data.settings || DEFAULTS;
        const isWorkMode = data.mode === 'work';
        
        // Wyślij powiadomienie
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon.png', // lub domyślna
          title: isWorkMode ? 'Koniec pracy!' : 'Koniec przerwy!',
          message: isWorkMode ? settings.breakMsg : settings.workMsg,
          priority: 2
        });

        // Zamiana trybów
        const nextMode = isWorkMode ? 'break' : 'work';
        // Konwersja minut na sekundy dla pracy, breakTime może być w sekundach w ustawieniach
        // Tutaj dla uproszczenia zakładamy: workTime (min), breakTime (sekundy - dla oczu)
        // Jeśli chcesz minuty dla przerwy, pomnóż przez 60.
        let nextTime = isWorkMode ? (settings.breakTime || DEFAULTS.breakTime) : (settings.workTime || DEFAULTS.workTime) * 60;
        
        chrome.storage.local.set({
          mode: nextMode,
          timeLeft: nextTime
        });

      } else {
        // Aktualizacja czasu
        chrome.storage.local.set({ timeLeft: newTime });
        // Badge na ikonce (opcjonalnie minuty)
        if (newTime > 60) {
            chrome.action.setBadgeText({ text: Math.ceil(newTime / 60).toString() + 'm' });
        } else {
            chrome.action.setBadgeText({ text: newTime.toString() + 's' });
        }
        chrome.action.setBadgeBackgroundColor({ color: data.mode === 'work' ? '#4CAF50' : '#FF5722' });
      }
    });
  }
});