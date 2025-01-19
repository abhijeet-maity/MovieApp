import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import TopRatedPage from "./pages/TopRatedPage.jsx";
import UpcomingMovie from "./pages/UpcomingMovie.jsx";
import SingleMovieDetailPage from "./pages/SingleMovieDetailPage.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingMovie />} />
          <Route path="/movie/:movieId" element={<SingleMovieDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
