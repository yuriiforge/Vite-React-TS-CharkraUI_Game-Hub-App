# 🎮 Game Hub - Video Game Discovery Website 🕹️

A video game discovery platform inspired by RAWG, built with modern web technologies to help users explore and track games across different platforms and genres.

## ✨ Features

- 🌓 **Theme Switch**: Toggle between dark and light mode
- 🎮 **Games Grid**: Browse games with ratings and platforms
- 🔍 **Advanced Search**:
  - 🎚️ Filters by genre/platform
  - 🔤 Search by game name
  - 🔄 Sorting by relevance/date/rating
- 🎥 **Game Trailers** – Watch available trailers for selected games
- 📱 **Responsive Design**: Works on all screen sizes

## 🛠️ Technologies Used

### ⚛️ Frontend Stack

- **TypeScript** – Static typing for safety and clarity
- **React** – Declarative UI library
- **Vite** – Lightning-fast build and dev server
- **Chakra UI** – Accessible and customizable component library

### 📦 State & Data Management

- **Zustand** – Lightweight global state for game filters (genre, platform, sort order)
- **React Query** – Powerful asynchronous state for fetching, caching, and syncing API data

### 🌐 Routing

- **React Router** – Client-side routing for clean navigation and dynamic game detail pages

### 📡 API & Network

- **Axios** – Promise-based HTTP client
- **RAWG API** – Game metadata, screenshots, platforms, and trailers

### 🧹 Code Quality

- **ESLint** – Linting and static code analysis
- **Prettier** – Code formatting for consistent style

## 🚀 Installation & Usage

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

1. Move to Project folder and run

```bash
npm install
```

2. Configure .env file based on .env.example

```bash
cp .env.example .env
```

3. For the Development mode run

```bash
npm run dev
```

4. For the Production mode run

```bash
npm run build
```
