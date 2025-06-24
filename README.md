# Nurkhan Masimzada Chess Game

This project was developed by Nurkhan Masimzada.

## Features

- Chess game based on React + Vite
- Modern interface and fast development environment

## Installation and Running

```sh
npm install
npm run dev
```

# ♟️ Chess School Online Platform

---

## 📌 Table of Contents

- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Modules Checklist](#-modules-checklist)
- [Technology Stack](#-technology-stack)
- [Future Enhancements](#-future-enhancements)
- [Installation Guide](#-installation-guide)
- [Folder Structure (Suggestion)](#-folder-structure-suggestion)
- [License](#-license)

---

## 🚀 Features

### 👥 User Management

- **Guest Access:**

  - Students can play as guests using their full name.
  - A UUID4 is added to ensure unique usernames.

- **Parent Accounts:**
  - Parents can register and add one or more children.
  - Children can log in through their assigned credentials.

### 🧠 Chess Quiz System

- **For Teachers:**

  - Create chess position quizzes (using FEN strings).
  - Assign quizzes to specific student groups.
  - Launch live quiz sessions during classes.

- **For Students:**
  - Take quizzes from the dashboard.
  - Solve positions by playing moves on the board.
  - Quiz results are stored and viewable by teachers.

### ♟️ Chess Game Modes

- **Multiplayer (PvP):**

  - Create and join game rooms with a code.
  - Play in real-time using WebSockets (Django Channels).
  - In-game chat and player presence detection.

- **Single Player (vs AI):**
  - Play against a lightweight embedded AI engine.
  - Varying difficulty levels (optional).

---

## 🧱 System Architecture

### Backend – Django

- Models:
  - `Parent`, `Student`, `Quiz`, `QuizResult`, `GameRoom`
- Auth System:
  - Custom user models for role-based access.
- Real-Time Support:
  - `Django Channels` with `Redis` backend.
- Database:
  - `PostgreSQL` or `SQLite` (for local dev)

### Frontend – Native HTML/CSS/JavaScript

- Game Board UI: `chessboard.js`
- Move Validation: `chess.js`
- AI Engine: `stockfish.js` (WebAssembly)
- WebSockets: Native JS socket handling

---

## ✅ Modules Checklist

| Module                            | Status |
| --------------------------------- | ------ |
| Guest login via name + UUID4      | ⬜     |
| Parent registration & dashboard   | ⬜     |
| Student management by parent      | ⬜     |
| PvP multiplayer game (WebSocket)  | ⬜     |
| Game room creation/joining system | ⬜     |
| Single-player mode with AI        | ⬜     |
| Quiz creation with FEN positions  | ⬜     |
| Quiz group assignment             | ⬜     |
| Live and asynchronous quiz modes  | ⬜     |
| Quiz submission & result tracking | ⬜     |

---

## 🧰 Technology Stack

| Category          | Technology               |
| ----------------- | ------------------------ |
| Backend Framework | Django (Python)          |
| Frontend          | HTML, CSS, JavaScript    |
| Real-Time Comm    | Django Channels + Redis  |
| Chess UI & Logic  | chessboard.js, chess.js  |
| AI Engine         | stockfish.js             |
| Database          | PostgreSQL / SQLite      |
| Authentication    | Django Custom User Model |
| Unique IDs        | Python `uuid.uuid4()`    |

---

## 📈 Future Enhancements

- 📊 Teacher dashboard with student quiz analytics
- 🔔 In-app notifications for new quizzes
- 📱 Responsive UI for mobile devices
- 💾 Game history and replay system
- 🔒 Security hardening (CSRF, XSS, rate limits)
- 🌐 Multi-language support

---

## License

© 2025 Nurkhan Masimzada. All rights reserved.
