
export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="/" className="brand">VANTERA</a>

        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="nav-actions">
          <a href="/login" className="login">Log in</a>
          <a href="/register" className="button">Get started</a>
        </div>
      </nav>

      <section className="hero" id="platform">
        <span className="eyebrow">
          YOUR PROJECTS. ONE PLATFORM.
        </span>

        <h1>
          Build without limits.
          <br />
          <span>Deploy with confidence.</span>
        </h1>

        <p>
          Everything you need to build, deploy and manage
          bots, websites and applications — all in one place.
        </p>

        <div className="hero-actions">
          <a href="/register" className="button">
            Start building
          </a>
          <a href="#features" className="secondary-button">
            Explore platform
          </a>
        </div>

        <div className="hero-note">
          One account. Every project. Complete control.
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-heading">
          <span className="eyebrow">THE PLATFORM</span>
          <h2>Everything works together.</h2>
          <p>
            A complete workspace for your digital projects.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <span>01 / HOSTING</span>
            <h3>Powerful hosting</h3>
            <p>
              Deploy and manage your bots, websites and
              applications from one control panel.
            </p>
          </article>

          <article className="feature-card">
            <span>02 / DEVELOPMENT</span>
            <h3>Build your way</h3>
            <p>
              Start with templates or upload your own
              project files.
            </p>
          </article>

          <article className="feature-card">
            <span>03 / MANAGEMENT</span>
            <h3>Complete control</h3>
            <p>
              Monitor resources, manage files and
              inspect deployment logs.
            </p>
          </article>
        </div>
      </section>

      <section className="closing" id="pricing">
        <h2>Your next project starts here.</h2>
        <a href="/register" className="button">
          Get started with VANTERA
        </a>
      </section>

      <footer>
        <span>VANTERA</span>
        <p>Everything you build. One platform.</p>
        <p>© {new Date().getFullYear()} VANTERA.</p>
      </footer>
    </main>
  );
}

