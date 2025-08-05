export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1>Front-end developer crafting fast, accessible UIs.</h1>
          <p>
            I build React apps with clean architecture, strong UX, and attention to detail.
            Below are a few recent projects.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
            <a href="/projects" className="btn">View Projects</a>
            <a href="/contact" className="btn ghost">Contact Me</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Featured work</h2>
          <div className="grid grid-3" style={{ marginTop: 18 }}>
            <article className="card">
              <h3>Dashboard Analytics</h3>
              <p>React + D3; 60fps charts, themeable, custom hooks.</p>
              <a className="btn ghost" href="#">Case Study →</a>
            </article>
            <article className="card">
              <h3>E-commerce UI</h3>
              <p>Vite + Zustand; server filters, skeleton loading, tests.</p>
              <a className="btn ghost" href="#">Live Demo →</a>
            </article>
            <article className="card">
              <h3>Design System</h3>
              <p>Tokens, theming, and accessible ARIA components.</p>
              <a className="btn ghost" href="#">Repo →</a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
