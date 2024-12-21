
# Movie App

A simple and user-friendly movie app built with React to explore popular, trending, and upcoming movies. Users can search for movies, view detailed information, and manage a favorites list. The app utilizes the TMDB API to fetch movie data.

## Features

### 1. **Main Features**

- **Home Page with Movie Listings**  
  Displays a list of popular, trending, or upcoming movies fetched from a public API (e.g., [TMDB API](https://www.themoviedb.org/documentation/api)).
  
- **Movie Detail Page**  
  Show detailed information about a selected movie, including:
  - Title
  - Release date

- **Client-Side Routing**  
  Navigation between pages (Home, Movie Details, Favorites) using [React Router](https://reactrouter.com/).

- **Search Functionality**  
  Allows users to search for movies by title.

- **Favorites Management**  
  Users can add or remove movies from a **Favorites** list using the [Context API](https://reactjs.org/docs/context.html) to manage global state.

- **Responsive Design**  
  The app is fully responsive, ensuring a seamless experience across devices (mobile, tablet, desktop).

### 2. **Side Features**
These features are useful for enhancing the user experience and performance.

- **Pagination or Infinite Scrolling**  
  Implement pagination or infinite scrolling for movie listings to improve performance and handle large amounts of data.

- **Custom Hooks**  
  Create custom hooks for:
  - Fetching movie data
  - Handling user interactions (e.g., adding/removing movies from favorites)

- **Watchlist**  
  Users can add movies to a personal watchlist for future reference.


## Tech Stack and Tools

- **React**: For building the UI and managing the component structure.
- **React Router**: For implementing client-side routing.
- **Context API**: For managing global state (e.g., favorites list).
- **TMDB API**: For fetching movie data (public API for movie data).
- **Vite**: For fast and optimized development build tool.
- **Fetch API**: For making HTTP requests to the TMDB API.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Nimasaghi-dev/movie-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd movie-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. **(If you're using Vite)**: Make sure you have Vite installed. If not, run:
   ```bash
   npm install vite --save-dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173` (default Vite server).

---

## Acknowledgements

- [TMDB API](https://www.themoviedb.org/documentation/api) for movie data.
- [React](https://reactjs.org/) for the UI framework.
- [React Router](https://reactrouter.com/) for handling navigation.
- [Vite](https://vitejs.dev/) for a fast and optimized development environment.
