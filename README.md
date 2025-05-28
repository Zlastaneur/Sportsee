# SportSee

---

## Getting Started

This repository contains both the backend API and the frontend React application for SportSee. You can run each part independently or together for full functionality.

---

## Features

-   View user profile and daily score.
-   Visualize activity sessions, average session duration, and performance metrics.
-   Display nutritional data (calories, proteins, carbs, lipids).
-   Switch between development (mock data) and production (API) modes.
-   Error handling: user-friendly messages if the API is unavailable.

---

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/sportsee.git
    cd sportsee
    ```

2. **Install dependencies for both backend and frontend:**

    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

---

## Usage

### Backend

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Start the backend server:

    ```bash
    npm run dev
    ```

    The backend will run on [http://localhost:3001](http://localhost:3001) by default.

### Frontend

1. Open a new terminal and navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Start the frontend application:

    ```bash
    npm start
    ```

    The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Available Scripts

Each part (backend and frontend) provides standard scripts:

-   `npm start` – Runs the app in development mode.
-   `npm run build` – Builds the app for production.
-   `npm test` – Runs tests (if available).

Refer to the `package.json` files in each directory for more details.

---
