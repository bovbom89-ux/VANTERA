
const projectTypes = [
  {
    name: "Discord Bot",
    description: "Build and host a Discord bot for your community.",
    icon: "◈",
    tag: "Popular",
  },
  {
    name: "Telegram Bot",
    description: "Create and manage your own Telegram bot.",
    icon: "◇",
  },
  {
    name: "Website",
    description: "Build and deploy a website or web application.",
    icon: "▤",
  },
  {
    name: "Node.js Application",
    description: "Run custom Node.js projects and services.",
    icon: "⌘",
  },
  {
    name: "Python Application",
    description: "Deploy Python scripts, applications and services.",
    icon: "⌁",
  },
  {
    name: "Database",
    description: "Create a database for your applications.",
    icon: "▦",
  },
  {
    name: "Automation",
    description: "Create workflows that handle tasks automatically.",
    icon: "⟳",
  },
];

export default function NewProjectPage() {
  return (
    <main className="dashboard-main">
      <div className="dashboard-topbar">
        <div>
          <p className="dashboard-eyebrow">PROJECTS / NEW PROJECT</p>
          <h1>Create a project</h1>
          <p>Choose what you want to build with VANTERA.</p>
        </div>
        <a href="/dashboard/projects" className="dashboard-secondary-button">
          Cancel
        </a>
      </div>

      <section className="new-project-intro">
        <span className="new-project-label">GET STARTED</span>
        <h2>What are we building today?</h2>
        <p>
          Select a project type to get started. You can configure and manage
          your project from one place.
        </p>
      </section>

      <section className="project-type-grid">
        {projectTypes.map((project) => (
          <article className="project-type-card" key={project.name}>
            <div className="project-type-card-top">
              <span className="project-type-icon">{project.icon}</span>
              {project.tag && (
                <span className="project-type-tag">{project.tag}</span>
              )}
            </div>

            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <div className="project-type-footer">
              <span>Project type</span>
              <span className="project-type-arrow">→</span>
            </div>
          </article>
        ))}
      </section>

      <section className="project-help">
        <div>
          <h3>Not sure where to start?</h3>
          <p>
            You can explore templates and use a starting point for your next
            project.
          </p>
        </div>
        <a href="/dashboard/templates">Explore templates <span>→</span></a>
      </section>
    </main>
  );
}
