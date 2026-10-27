# Celebrare Photo Gallery

A responsive photo gallery built with **React, Vite, and Tailwind CSS**. Browse photos, search by photographer name, and save your favourite photos with persistent storage.

## Features

- **Photo Gallery:** Fetches and displays 30 photos from the Picsum Photos API.
- **Search by Author:** Filter photos by photographer name without making additional API requests.
- **Favourite Photos:** Add or remove photos from your favourites with a single click.
- **Persistent Storage:** Favourites remain saved after refreshing the page using browser localStorage.
- **Loading State:** Displays a spinner while photos are being fetched.
- **Error Handling:** Shows a helpful error message if the API request fails.
- **Responsive Design:** Adapts to mobile, tablet, and desktop screen sizes.
- **Reusable Components:** Uses reusable React components for cleaner code.
- **Lazy Loading:** Loads images as they are needed to improve the browsing experience.

## Tech Stack

- **React** — Component-based UI development
- **Vite** — Development server and build tool
- **Tailwind CSS** — Responsive styling
- **JavaScript (ES6+)** — Application logic
- **Picsum Photos API** — Photo data
- **React Hooks** — State management and performance optimization
- **localStorage** — Persistent favourite storage

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/avinash565/Celebrare
```

**2. Navigate to the project folder**

```bash
cd celebrare-photo-gallery
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local URL**

Open the URL shown in your terminal, usually:

`http://localhost:5173`

## Project Structure

```text
Celebrare/
├── public/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   └── PhotoCard.jsx
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── reducers/
│   │   └── favouritesReducer.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## React Concepts Used

### Custom Hook — `useFetchPhotos`

Handles fetching photo data from the API and manages the photos, loading, and error states.

### `useReducer`

Manages favourite photo actions, including adding and removing favourite photo IDs.

### `useEffect`

Fetches photos when the component mounts and saves updated favourites to localStorage.

### `useCallback`

Memoizes the search and favourite handler functions when their dependencies remain unchanged.

### `useMemo`

Memoizes the filtered photo list and recalculates it when the photos or search query changes.

### `useState`

Manages the search input and the state returned by the custom fetching hook.

## API Reference

This project uses the [Picsum Photos API](https://picsum.photos/).

**Endpoint:**

`https://picsum.photos/v2/list?limit=30`

The API returns a list of photos containing information such as the photo ID, author, and image URL.

## Responsive Layout

The gallery uses a responsive grid:

- **Mobile:** 1 column
- **Tablet:** 2 columns
- **Large screens:** 4 columns

## Favourite Storage

Favourite photo IDs are stored in the browser's localStorage. This allows users to retain their favourite selections after refreshing the page in the same browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build |

## Project Objective

The goal of this project is to demonstrate practical knowledge of React hooks, API integration, reusable components, responsive UI development, state management, and browser storage.


---

If you found this project useful, feel free to explore the code and try it locally!
