## Installation

1. **Clone the repository:**

    ```bash
    git clone <repo-url>
    cd Frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure the environment:**

    - Rename `.env.example` to `.env` if needed.
    - Edit the variables as required:
        ```
        VITE_ENVIRONMENT=dev # or prod
        VITE_USERID=12 # or 18
        VITE_BACKENDURL="http://localhost:3000"
        ```

4. **Start the project:**
    ```bash
    npm run dev
    ```

## Folder structure

-   `src/components/`: React components (charts, lists, etc.)
-   `src/data.js`: Mock data for development mode.
-   `src/ApiService.js`: Service for API calls (mock or real).
-   `src/Formatter.js`: Utility for formatting data.
-   `src/app.scss`: Global styles.

## Usage

-   The frontend connects to the backend API (Node.js/Express).
-   If the API is not accessible, an error message is displayed to the user.
-   The mode (dev or prod) is controlled by the `VITE_ENVIRONMENT` environment variable.

## Useful scripts

-   `npm run dev`: Start the development server.
-   `npm run build`: Build the production version.
-   `npm run preview`: Preview the production build.

## Notes

-   To test with mock data, use `VITE_ENVIRONMENT=dev`.
-   To use the real API, start the backend and set `VITE_ENVIRONMENT=prod`.

---
