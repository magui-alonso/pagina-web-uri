import NextLink from "next/link";

export const Nav = () => (
  <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
    <a id="navbar-brand" href="index.html">
      <strong>U</strong>ri<strong>V</strong>ida
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a id="nav-texto" className="nav-link" href="osdepym.html">
            <img
              className="nav-link--imagen"
              src="/osdepym.png"
              alt="logo-osdepym"
              width="140"
              height="35"
            />
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            id="nav-texto"
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Salud
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <NextLink href="/blog/[page]" as="/blog/0">
              <a className="dropdown-item">Blog</a>
            </NextLink>
            <NextLink href="/videos/[page]" as="/videos/0">
              <a className="dropdown-item">Videos</a>
            </NextLink>
          </div>
        </li>
        <li className="nav-item">
          <a id="nav-texto" className="nav-link" href="#contacto">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
