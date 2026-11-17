
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="brand">VANTERA</span>
        <p>Everything you build. One platform.</p>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} VANTERA.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}

