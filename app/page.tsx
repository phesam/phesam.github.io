const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header>
        <a className="name" href="#top" aria-label="Back to top">
          Parsa Hesam
        </a>
        <nav aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/parsa-hesam"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
        </nav>
      </header>

      <section className="intro" id="top">
        <p className="eyebrow">Software engineer · Los Angeles</p>
        <h1>I build useful software with clarity.</h1>
        <p className="lede">
          Currently at Walmart Global Tech. I care about thoughtful products,
          reliable systems, and making complex things feel obvious.
        </p>
      </section>

      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <div className="list">
          <article className="row">
            <div>
              <h3>Walmart Global Tech</h3>
              <p>Building software at global scale.</p>
            </div>
            <span>Software engineer</span>
          </article>
        </div>
      </section>

      <section aria-labelledby="selected-work">
        <h2 id="selected-work">Selected work</h2>
        <div className="list">
          <article className="row">
            <div>
              <h3>Doxin</h3>
              <p>An AI-powered documentation platform for agents.</p>
            </div>
            <span>2025—26</span>
          </article>
        </div>
      </section>

      <section aria-labelledby="education">
        <h2 id="education">Education</h2>
        <div className="list">
          <article className="row">
            <div>
              <h3>UC Irvine</h3>
              <p>B.S. Computer Science</p>
            </div>
            <span>2025</span>
          </article>
        </div>
      </section>

      <footer>
        <p>Good work starts with a clear problem.</p>
        <a
          href="https://www.linkedin.com/in/parsa-hesam"
          target="_blank"
          rel="noreferrer"
        >
          Get in touch <Arrow />
        </a>
      </footer>
    </main>
  );
}
