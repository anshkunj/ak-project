const projects = [
  {
    name: "LearningOS",
    type: "SaaS product",
    status: "In development",
    progress: 42,
    description: "An intelligent learning platform combining collaborative learning, progress tracking and AI-powered assistance.",
  },
  {
    name: "School Platform",
    type: "Education software",
    status: "Prototype",
    progress: 28,
    description: "A modern school workspace for assessments, results, analytics and student learning workflows.",
  },
];

const activity = [
  ["Today", "Product architecture reviewed", "LearningOS"],
  ["Yesterday", "Assessment workflow prototyped", "School Platform"],
  ["Oct 6", "Authentication and backend foundation updated", "LearningOS"],
  ["Oct 4", "Product roadmap refined", "anshkunj"],
];

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">anshkunj WORKSPACE</p>
            <h1>Product Dashboard</h1>
            <p className="dashboard-subtitle">
              A snapshot of the software products currently being designed and built.
            </p>
          </div>
          <div className="status-pill">
            <span className="status-dot" />
            Development active
          </div>
        </div>

        <section className="dashboard-stats">
          <div className="stat-card">
            <span>Active projects</span>
            <strong>2</strong>
            <small>Currently in development</small>
          </div>
          <div className="stat-card">
            <span>Products launched</span>
            <strong>0</strong>
            <small>Early-stage venture</small>
          </div>
          <div className="stat-card">
            <span>Current focus</span>
            <strong>Build</strong>
            <small>Validate → iterate → launch</small>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROJECTS</p>
              <h2>What we&apos;re building</h2>
            </div>
            <span className="section-note">Internal development snapshot</span>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <div>
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-status">{project.status}</span>
                </div>
                <p>{project.description}</p>
                <div className="progress-row">
                  <span>Development progress</span>
                  <strong>{project.progress}%</strong>
                </div>
                <div className="progress-track" aria-label={`${project.progress}% complete`}>
                  <div className="progress-fill" style={{ width: `${project.progress}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">ACTIVITY</p>
                <h2>Recent updates</h2>
              </div>
            </div>
            <div className="activity-list">
              {activity.map(([date, text, project]) => (
                <div className="activity-item" key={date + text}>
                  <div className="activity-marker" />
                  <div>
                    <p>{text}</p>
                    <span>{project} · {date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-panel">
            <div>
              <p className="eyebrow">ROADMAP</p>
              <h2>Next milestones</h2>
            </div>
            <ol className="roadmap">
              <li><span>01</span><div><strong>Validate core workflows</strong><p>Test the first product concepts with real use cases.</p></div></li>
              <li><span>02</span><div><strong>Launch first product</strong><p>Publish a focused product with clear pricing and support.</p></div></li>
              <li><span>03</span><div><strong>Iterate from feedback</strong><p>Use customer feedback and usage data to improve the product.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="dashboard-notice">
          <div>
            <p className="eyebrow">EARLY STAGE</p>
            <h2>This dashboard shows development work, not customer metrics.</h2>
            <p>
              anshkunj is currently building its first software products. Customer
              accounts, subscriptions, payments and production analytics will be
              introduced only when the corresponding products are launched.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
