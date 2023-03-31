import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Navigation() {
  return (
    <div className="row">
      <div className="col-2">
        <img src="./logo192.png" alt="companyLogo" />
      </div>

      <div className="col">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Movie Collection
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/podcast">
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="col">
          <h1 className={styles.h1}>Movie Collection</h1>
        </div>

        {/* <nav className="navbar">
          <Link className={styles.link} to="/">
            Home
          </Link>{' '}
          | <Link to="movies">Movies</Link> | <Link to="podcast">Podcast</Link>
        </nav> */}
      </div>
      {/* <div className="col"></div> */}
    </div>
  );
}

export default Navigation;
