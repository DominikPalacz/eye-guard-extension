# EN
# 👁️ Focus & Eye Guard

**A simple yet powerful browser extension designed to help you protect your eyesight and maintain productivity.**

This tool allows you to define your own work and rest rhythm – whether you follow the Pomodoro Technique (e.g., 25 min work / 5 min break) or the healthy 20-20-20 rule (20 min work / 20 sec looking away).

## ✨ Key Features

* **Two Modes:** Focus Mode and Break Mode (Eye Guard).
* **Background Operation:** The timer runs reliably even when the extension popup is closed.
* **Live Badge:** The extension icon displays the remaining minutes or seconds in real-time.
* **System Notifications:** You will receive a clear system alert (Windows/macOS) when the time is up.
* **Automation:** Once work time ends, the timer automatically switches to break mode (the interface turns orange).
* **Full Customization:** Configure your own timer durations and custom messages.

## 🚀 How to Install

The extension works on Chromium-based browsers (Google Chrome, Microsoft Edge, Brave, Opera).

1.  **Download** this repository to your computer (click `Code` -> `Download ZIP`) and extract it.
2.  Open your browser and enter: `chrome://extensions` (or `edge://extensions`) in the address bar.
3.  In the top right corner, ensure that **Developer mode** is toggled **ON**.
4.  Click the **Load unpacked** button.
5.  Select the `eye-guard-extension` folder (the one you extracted).

Done! The extension icon should appear in your browser's toolbar.

## 📖 How It Works

1.  **Start:** Click the extension icon. You will see a circular timer. Click **START**.
2.  **Focus:** You can close the popup window. The timer runs in the background, and the small badge on the icon shows your progress.
3.  **Time's Up:**
    * A system notification will pop up.
    * The timer automatically switches to "Break" mode (the interface changes to orange).
4.  **Reset:** You can reset the timer at any time using the button in the menu.

## ⚙️ Configuration (Customization)

Want to change your rhythm?

1.  Click the extension icon.
2.  Select **"⚙️ Advanced settings"** (Zaawansowane ustawienia) at the bottom of the popup.
3.  Adjust the times to suit your needs, for example:
    * *Classic Pomodoro:* 25 min work / 5 min break.
    * *Deep Work:* 50 min work / 10 min break.
    * *Healthy Eyes:* 20 min work / 20 sec break.

## 📂 Project Structure

* `manifest.json` - Extension configuration and permissions.
* `background.js` - Service worker responsible for the background timer (Chrome Alarms API).
* `popup.html` / `popup.js` - User interface (the popup window).
* `options.html` / `options.js` - Settings panel.

---
*Project created for educational purposes and to improve digital hygiene.*

# PL
# 👁️ Focus & Eye Guard

**Prosta, ale potężna wtyczka do przeglądarki, która pomaga zadbać o wzrok i utrzymać produktywność.**

To narzędzie pozwala Ci zdefiniować własny rytm pracy i odpoczynku – niezależnie od tego, czy stosujesz Technikę Pomodoro (np. 25 min pracy / 5 min przerwy), czy zasadę zdrowych oczu 20-20-20 (20 min pracy / 20 sek patrzenia w dal).

## ✨ Główne funkcje

* **Dwa tryby:** Tryb Skupienia (Focus) i Tryb Przerwy (Eye Guard).
* **Praca w tle:** Licznik działa niezawodnie nawet po zamknięciu okienka wtyczki.
* **Live Badge:** Ikona rozszerzenia pokazuje na bieżąco, ile minut lub sekund zostało do końca.
* **Powiadomienia systemowe:** Otrzymasz wyraźny komunikat w systemie Windows/macOS, gdy czas minie.
* **Automatyzacja:** Po zakończeniu pracy licznik sam przełącza się na przerwę (zmieniając kolor na pomarańczowy).
* **Pełna konfiguracja:** Możliwość ustawienia własnych czasów i komunikatów.

## 🚀 Jak zainstalować?

Wtyczka działa na przeglądarkach opartych na Chromium (Google Chrome, Microsoft Edge, Brave, Opera).

1.  **Pobierz** to repozytorium na dysk (kliknij `Code` -> `Download ZIP`) i wypakuj je.
2.  Otwórz przeglądarkę i w pasku adresu wpisz: `chrome://extensions` (lub `edge://extensions`).
3.  W prawym górnym rogu upewnij się, że przełącznik **Tryb dewelopera** (Developer mode) jest **włączony**.
4.  Kliknij przycisk **Załaduj rozpakowane** (Load unpacked).
5.  Wybierz folder `eye-guard-extension` (ten, który wypakowałeś).

Gotowe! Ikona wtyczki powinna pojawić się na pasku obok adresu strony.

## 📖 Jak to działa?

1.  **Start:** Kliknij ikonkę wtyczki. Zobaczysz kółko z czasem. Kliknij przycisk **START**.
2.  **Praca w tle:** Możesz zamknąć okienko pop-up. Czas leci w tle, a mały licznik na ikonce (badge) pokazuje postęp.
3.  **Koniec czasu:**
    * Wyskoczy systemowe powiadomienie.
    * Licznik automatycznie zmieni tryb na "Przerwa" (interfejs zmieni kolor na pomarańczowy).
4.  **Reset:** W każdej chwili możesz zresetować licznik przyciskiem w menu.

## ⚙️ Konfiguracja (Customizacja)

Chcesz zmienić rytm pracy?

1.  Kliknij ikonkę wtyczki.
2.  Wybierz **"⚙️ Zaawansowane ustawienia"** na dole okienka.
3.  Dostosuj czasy do swoich potrzeb, np.:
    * *Klasyczne Pomodoro:* 25 min pracy / 5 min przerwy.
    * *Deep Work:* 50 min pracy / 10 min przerwy.
    * *Zdrowe Oczy:* 20 min pracy / 20 sek przerwy.

## 📂 Struktura projektu

* `manifest.json` - Konfiguracja i uprawnienia wtyczki.
* `background.js` - Service worker odpowiedzialny za odliczanie czasu w tle (Chrome Alarms API).
* `popup.html` / `popup.js` - Interfejs użytkownika (małe okienko).
* `options.html` / `options.js` - Panel ustawień.

---
*Projekt stworzony w celach edukacyjnych i dla poprawy higieny cyfrowej.*