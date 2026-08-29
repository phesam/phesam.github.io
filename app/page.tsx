const Arrow = () => <span aria-hidden="true">↗</span>;

const links = {
  walmart: 'https://tech.walmart.com/',
  rtx: 'https://capstone.cs.uci.edu/student-industry-teams-2025/',
  oneKit: 'https://onekit.co/',
  doxin: 'https://doxin.app/',
  aircode: 'https://github.com/phesam/aircode',
  github: 'https://github.com/phesam',
  linkedin: 'https://www.linkedin.com/in/parsa-hesam',
  uci: 'https://ics.uci.edu/',
};

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">Parsa Hesam</a>
        <nav aria-label="Social links">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div>
          <p className="kicker">Software Engineer II · Sunnyvale</p>
          <h1>Hey, I&apos;m Parsa.</h1>
          <p className="lead">
            I build products, platforms, and agent systems—from the interface
            to the infrastructure underneath it.
          </p>
          <p className="sublead">
            Currently at Walmart Global Tech. Previously RTX, and still building
            OneKit and Doxin on the side.
          </p>
        </div>
        <img className="portrait" src="/parsa.png" alt="Parsa Hesam" />
      </section>

      <section>
        <div className="section-head">
          <h2>Work</h2>
          <span>Selected experience</span>
        </div>
        <div className="work-grid">
          <a className="work-card" href={links.walmart} target="_blank" rel="noreferrer">
            <div className="work-art walmart-art">
              <span>Walmart</span>
              <small>Global Tech</small>
            </div>
            <div className="card-copy">
              <p className="meta">Software Engineer II · 2025—Now</p>
              <h3>Seller Center Core <Arrow /></h3>
              <p>
                Building seller-facing products and the platform behind Walmart
                Marketplace&apos;s Seller Center.
              </p>
              <p className="previous">Previously, Software Engineer Intern · 2024</p>
            </div>
          </a>

          <a className="work-card" href={links.rtx} target="_blank" rel="noreferrer">
            <div className="work-art rtx-art">
              <span>RTX</span>
              <small>Raytheon × UCI</small>
            </div>
            <div className="card-copy">
              <p className="meta">Software / ML Engineer · 2025</p>
              <h3>Airborne threat analysis <Arrow /></h3>
              <p>
                Built a real-time anomaly-detection system for congested
                airspace. Won 2nd place at UCI Capstone.
              </p>
            </div>
          </a>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Products</h2>
          <span>Founder work</span>
        </div>
        <div className="feature-grid">
          <a className="feature" href={links.oneKit} target="_blank" rel="noreferrer">
            <div className="media one-kit-media">
              <img src="/onekit.webp" alt="OneKit product illustration" />
            </div>
            <div className="card-copy">
              <p className="meta">Co-founder · Engineering lead</p>
              <h3>OneKit <Arrow /></h3>
              <p>
                A cross-platform AI workspace with an MCP-compatible agent
                runtime, native integrations, and a multi-tenant backend.
              </p>
            </div>
          </a>

          <a className="feature" href={links.doxin} target="_blank" rel="noreferrer">
            <div className="media doxin-media">
              <img src="/doxin.jpg" alt="Doxin knowledge workspace" />
            </div>
            <div className="card-copy">
              <p className="meta">Founder · Engineer</p>
              <h3>Doxin <Arrow /></h3>
              <p>
                An agent-native knowledge layer with hybrid retrieval, version
                history, and five MCP tools for reading and writing knowledge.
              </p>
            </div>
          </a>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Other builds</h2>
          <span>Games, systems, and experiments</span>
        </div>
        <div className="small-grid">
          <article>
            <p className="meta">Game systems</p>
            <h3>Snipe or Die!</h3>
            <p>Unreleased Roblox FPS; its marketing reached 2M+ views.</p>
          </article>
          <a href={links.aircode} target="_blank" rel="noreferrer">
            <p className="meta">Local AI</p>
            <h3>Aircode <Arrow /></h3>
            <p>Offline LeetCode practice powered by Ollama.</p>
          </a>
          <article>
            <p className="meta">Systems in C</p>
            <h3>Allocator + TCP server</h3>
            <p>Memory management, concurrency, sockets, and synchronization.</p>
          </article>
          <article>
            <p className="meta">Embedded + vision</p>
            <h3>Piano + 3D reconstruction</h3>
            <p>Bare-metal recording hardware and structured-light point clouds.</p>
          </article>
        </div>
      </section>

      <footer>
        <p>
          B.S. Computer Science,{' '}
          <a href={links.uci} target="_blank" rel="noreferrer">UC Irvine <Arrow /></a>
        </p>
        <a href={links.linkedin} target="_blank" rel="noreferrer">Get in touch <Arrow /></a>
      </footer>
    </main>
  );
}
