const Navbar = ({ setCategory, activeCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <span className="badge bg-light text-dark fs-4">NewsWeb</span>
        </a>
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
            {["general", "business", "science", "sports", "technology"].map(
              (category) => (
                <li className="nav-item" key={category}>
                  <a
                    href="#"
                    className={`nav-link ${
                      activeCategory === category ? "active" : ""
                    }`}
                    aria-current={
                      activeCategory === category ? "page" : undefined
                    }
                    onClick={() => setCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
