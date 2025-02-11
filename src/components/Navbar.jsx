import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../Styles/Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <Link to="/">MovieClix</Link>
        </h1>
      </div>
      <div className="nav-right">
        <ul className="navbar-links">
          <li>
            <Link to="/">Popular</Link>
          </li>
          <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
