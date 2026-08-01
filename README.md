# 🎮 Tris

Un semplice gioco del **Tris** realizzato con **HTML, CSS e JavaScript**.

Il progetto permette a due giocatori di sfidarsi in una partita di Tris su una griglia 3×3, alternando i turni e mantenendo il punteggio complessivo delle partite.

## ✨ Funzionalità

* ❌⭕ Modalità **2 giocatori**
* 🔄 Alternanza automatica dei turni
* 🏆 Rilevamento della vittoria
* 🤝 Rilevamento del pareggio
* 📊 Sistema di punteggio tra i giocatori
* 🔁 Possibilità di ricominciare il round
* 🧹 Possibilità di azzerare completamente il punteggio
* 🎨 Interfaccia grafica semplice e colorata
* 🖱️ Caselle interattive con effetto hover

## 🛠️ Tecnologie utilizzate

Il progetto è stato realizzato utilizzando:

* **HTML5** – Struttura della pagina e del tabellone
* **CSS3** – Stile, layout e animazioni
* **JavaScript** – Logica di gioco, gestione dei turni e del punteggio

## 📁 Struttura del progetto

```text
tris/
│
├── tris.html    # Pagina principale del gioco
├── tris.css     # Stili e layout grafico
├── tris2.js     # Logica del gioco
└── README.md    # Documentazione del progetto
```

## ▶️ Come avviare il gioco

Non è necessario installare alcuna dipendenza.

### 1. Clona il repository

```bash
git clone https://github.com/PERSICO1851/tris.git
```

### 2. Entra nella cartella

```bash
cd tris
```

### 3. Avvia il gioco

Apri il file:

```text
tris.html
```

con un qualsiasi browser moderno, come **Google Chrome**, **Mozilla Firefox**, **Microsoft Edge** o **Safari**.

In alternativa, puoi utilizzare un'estensione come **Live Server** in Visual Studio Code per avviare il progetto tramite un server locale.

## 🎮 Come giocare

1. Apri `tris.html` nel browser.
2. Il gioco mostra il giocatore a cui spetta il turno.
3. Clicca su una delle nove caselle del tabellone.
4. I due giocatori giocano alternandosi.
5. Il primo giocatore che riesce a disporre tre simboli in fila vince il round.
6. Il risultato viene aggiunto al punteggio totale.
7. Utilizza **Clear-Round** per iniziare un nuovo round.
8. Utilizza **Clear-Table** per azzerare il punteggio complessivo.

## 🏆 Sistema di punteggio

Il gioco mantiene il punteggio delle partite vinte dai due giocatori.

Il punteggio viene visualizzato nella parte inferiore del tabellone e può essere azzerato utilizzando il pulsante **CLEAR-TABLE**.

## 🎨 Interfaccia

Il tabellone di gioco è composto da una griglia **3×3** con nove caselle interattive.

Il progetto utilizza CSS per gestire:

* Dimensioni del tabellone
* Posizionamento delle caselle
* Stile dei pulsanti
* Effetti al passaggio del mouse
* Visualizzazione del titolo e del punteggio

## 🚀 Possibili sviluppi futuri

Il progetto potrebbe essere ampliato aggiungendo:

* 🤖 Modalità **giocatore contro computer**
* 🧠 Intelligenza artificiale con algoritmo **Minimax**
* 📱 Migliore ottimizzazione per dispositivi mobili
* 🎨 Personalizzazione del tema grafico
* ✨ Animazioni per la vittoria
* 🔊 Effetti sonori
* 🏅 Classifica delle partite
* 💾 Salvataggio del punteggio tramite `localStorage`
* 🌐 Pubblicazione online tramite GitHub Pages

## 👤 Autore

Realizzato da **Persico 3H**.

GitHub: **PERSICO1851**

## 📄 Licenza

Questo progetto è stato realizzato a scopo didattico e personale.

