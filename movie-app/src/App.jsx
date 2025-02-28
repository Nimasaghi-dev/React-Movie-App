import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import HomePage from './components/HomePage';
import './App.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  )
}

export default App;