
export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="brand">
        VANTERA
      </a>

      <div className="nav-links">
        <a href="#platform">Platform</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </div>

      <div className="nav-actions">
        <a href="/login" className="login">
          Log in
        </a>

        <a href="/register" className="button">
          Get started
        </a>
      </div>
    </nav>
  );
}

