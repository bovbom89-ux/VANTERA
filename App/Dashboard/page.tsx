
const projects = [
  {
    name: "My Discord Bot",
    type: "Discord Bot",
    status: "Not deployed",
  },
  {
    name: "My Website",
    type: "Website",
    status: "Not deployed",
  },
];

export default function DashboardPage() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <a href="/" className="brand">VANTERA</a>

        <p className="sidebar-label">WORKSPACE</p>
        <a className="active" href="/dashboard">Overview</a>
        <a href="/dashboard/projects">Projects</a>
        <a href="/templates">Templates</a>
        <a href="/marketplace">Marketplace</a>

        <p className="sidebar-label">MANAGEMENT</p>
        <a href="/dashboard/usage">Resource usage</a>
        <a href="/dashboard/billing">Billing</a>
        <a href="/dashboard/settings">Settings</a>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <span className="eyebrow">YOUR WORKSPACE</span>
            <h1>Overview</h1>
            <p>Welcome to your VANTERA workspace.</p>
          </div>

          <a href="/dashboard/projects/new" className="button">
            + New project
          </a>
        </header>

        <div className="welcome-panel">
          <span className="eyebrow">VANTERA CLOUD</span>
          <h2>What will you build today?</h2>
          <p>
            Create a bot, launch a website or deploy
            your next application.
          </p>
          <a href="/dashboard/projects/new" className="button">
            Create a project
          </a>
        </div>

        <div className="stats-grid">
          <article className="stat-card">
            <span>Total projects</span>
            <strong>0</strong>
          </article>

          <article className="stat-card">
            <span>Running deployments</span>
            <strong>0</strong>
          </article>

          <article className="stat-card">
            <span>Storage used</span>
            <strong>0 GB</strong>
          </article>

          <article className="stat-card">
            <span>Current plan</span>
            <strong>Free</strong>
          </article>
        </div>

        <section className="projects-section">
          <div className="section-heading">
            <div>
              <h2>Your projects</h2>
              <p>Manage your applications and deployments.</p>
            </div>
            <a href="/dashboard/projects">View all</a>
          </div>

          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div>
                <h3>{project.name}</h3>
                <span>{project.type}</span>
              </div>

              <span className="project-status">
                {project.status}
              </span>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
