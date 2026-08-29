type Item = {
  name: string;
  description: string;
  href?: string;
};

const work: Item[] = [
  {
    name: 'Walmart Global Tech',
    description:
      'Software Engineer II on Seller Center Core. I build seller-facing products and the platform behind them across React, TypeScript, Node, GraphQL, Kubernetes, observability, and analytics.',
  },
  {
    name: 'Walmart Global Tech — Internship',
    description:
      'Solo-built an internal engineering documentation platform and the tooling that migrates and synchronizes its docs. It is still used in new-engineer onboarding.',
  },
  {
    name: 'OneKit',
    description:
      'Co-founded a cross-platform AI workspace and led engineering. Built its MCP-compatible agent runtime, multi-tenant backend, native integrations, billing, and distribution; managed two engineering interns.',
  },
  {
    name: 'Doxin',
    description:
      'Built an agent-native knowledge layer with organization-scoped hybrid search, version history, and five MCP tools for reading and writing engineering knowledge.',
  },
];

const projects: Item[] = [
  {
    name: 'AeroAI',
    description:
      'RTX-sponsored airborne-threat analysis system built with real flight data, PyTorch, Captum, Redis, AWS, Flask, and Leaflet. Won 2nd place at UCI Capstone.',
  },
  {
    name: 'Snipe or Die!',
    description:
      'Co-developed an unreleased round-based Roblox FPS in Lua with persistent weapons, skins, and currency systems. Its marketing reached 2M+ views on TikTok.',
  },
  {
    name: 'Aircode',
    href: 'https://github.com/phesam/aircode',
    description: 'Offline LeetCode practice powered by Ollama.',
  },
  {
    name: 'Custom Heap Allocator',
    description:
      'Implemented malloc, free, and realloc in C with best-fit allocation, boundary tags, splitting, coalescing, and an explicit free list.',
  },
  {
    name: 'Concurrent TCP Server',
    description:
      'Built a thread-per-client C server with synchronized shared state, reader-writer locking, logging, and signal-driven shutdown.',
  },
  {
    name: 'Bare-Metal Piano Recorder',
    description:
      'Programmed GPIO, PWM, and I2C registers on a TI microcontroller for keypad input, audio, EEPROM-backed recording, and playback.',
  },
  {
    name: 'Structured-Light 3D Reconstruction',
    description:
      'Built a stereo-vision pipeline for reconstructing and aligning 3D point clouds from multi-view structured-light images.',
  },
];

function List({ title, items }: { title: string; items: Item[] }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map(({ name, description, href }) => (
          <li key={name}>
            {href ? (
              <a href={href} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              <strong>{name}</strong>
            )}
            : {description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Hey, I&apos;m Parsa</h1>

      <nav aria-label="Social links">
        <a href="https://github.com/phesam" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span>·</span>
        <a
          href="https://www.linkedin.com/in/parsa-hesam"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </nav>

      <div className="intro">
        <p>
          I&apos;m a software engineer and builder based in Sunnyvale. At Walmart
          Global Tech, I work on the product and platform behind Seller Center.
        </p>
        <p>
          I like building end to end: interfaces, backend services, agent
          infrastructure, deployment, and observability. Outside work, I&apos;ve
          co-founded OneKit, built Doxin, and spent time in systems, embedded
          software, and computer vision.
        </p>
      </div>

      <List title="Work" items={work} />
      <List title="Projects" items={projects} />

      <section>
        <h2>Education</h2>
        <p>
          <strong>UC Irvine</strong>: B.S. Computer Science, 2025.
        </p>
      </section>
    </main>
  );
}
