# Movie Explorer App

A modern React application for discovering, tracking, and managing movies. Built with React, Vite, and TMDB API, this app allows users to explore random movies, search for specific titles, and maintain personal watchlists.

## 🎬 Features

### Core Features
- **Random Movie Discovery**: Explore random popular movies with a refresh option
- **Search Functionality**: Search for movies using TMDB's extensive database
- **Personal Watchlists**: 
  - Add movies to "To Watch" list
  - Mark movies as "Watched"
  - Remove movies from either list
- **Responsive Design**: Seamless experience across all devices

### User Interface
- Modern, minimal design
- Intuitive navigation
- Smooth animations and transitions
- Consistent movie card layout across all views

## 🛠️ Technologies

- **React 19**
- **React Router v7** for navigation
- **Context API** for state management
- **Vite** for build tooling
- **TMDB API** for movie data
- **Font Awesome** for icons
- **CSS3** for styling (no external UI libraries)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- TMDB API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nimasaghi-dev/movie-app.git
```

2. Install dependencies:
```bash
cd movie-app
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_TMDB_KEY=your_tmdb_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## 📱 Usage

### Home Page
- Browse random popular movies
- Click "Refresh" to load new movies
- Add movies to your watchlist or mark as watched

### Search Movies
- Click "+ Add" in the navigation
- Search for movies by title
- Add movies to your lists directly from search results

### Manage Lists
- "To Watch": View and manage your watchlist
- "Watched": Track movies you've watched
- Easy movement between lists with intuitive controls

## 🎨 UI Components

### Movie Cards
- Movie poster
- Title and release year
- Action buttons for list management
- Hover effects for better interaction

### Navigation
- Responsive header
- Clear navigation links
- Active state indicators

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for their extensive movie database
- [Font Awesome](https://fontawesome.com/) for the icons
