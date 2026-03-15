import './App.css'

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="top-nav">
          <p className="brand">
            <img className="brand-mark" src="/pinnacle-logo.svg" alt="Pinnacle Dev Studio logo" />
            Pinnacle Dev Studio
          </p>
          <a className="nav-link" href="#contact">
            Start a Project
          </a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Built by Lesly Max Dsouza</p>
          <h1>Deliver Digital Content Today. Expand Into Commerce Tomorrow.</h1>
          <p className="lead">
            Pinnacle Dev Studio helps creators and businesses publish digital products
            with speed, trust, and scale. We are building the bridge from content
            delivery to a future-ready marketplace for buying and selling goods.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">
              Explore Services
            </a>
            <a className="btn btn-secondary" href="#roadmap">
              View Roadmap
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="section">
          <h2>What We Deliver</h2>
          <div className="grid">
            <article className="card">
              <h3>Digital Content Distribution</h3>
              <p>
                Fast, secure delivery of ebooks, courses, design assets, and premium
                downloads with flexible access controls.
              </p>
            </article>
            <article className="card">
              <h3>Conversion-Focused Web Presence</h3>
              <p>
                Landing pages and storefront-ready experiences designed to convert
                visitors into loyal paying customers.
              </p>
            </article>
            <article className="card">
              <h3>Business Automation</h3>
              <p>
                Integrated workflows for onboarding, delivery notifications, customer
                support, and payment lifecycle visibility.
              </p>
            </article>
          </div>
        </section>

        <section id="roadmap" className="section roadmap">
          <h2>Growth Roadmap</h2>
          <div className="timeline">
            <div className="timeline-item">
              <p className="phase">Phase 1</p>
              <h3>Digital-First Platform</h3>
              <p>
                Launch and scale content delivery products with robust performance and
                customer analytics.
              </p>
            </div>
            <div className="timeline-item">
              <p className="phase">Phase 2</p>
              <h3>Hybrid Commerce Layer</h3>
              <p>
                Add secure buyer-seller flows for physical and digital goods,
                inventory touchpoints, and transaction confidence tools.
              </p>
            </div>
            <div className="timeline-item">
              <p className="phase">Phase 3</p>
              <h3>Marketplace Expansion</h3>
              <p>
                Enable multi-vendor growth, recurring revenue channels, and global
                customer reach from one scalable platform.
              </p>
            </div>
          </div>
        </section>

        <section id="leads" className="section lead-section">
          <div className="lead-copy">
            <h2>Get Early Access Updates</h2>
            <p>
              Join the Pinnacle Dev Studio launch list to receive product updates,
              digital growth tips, and early invites as we expand into marketplace
              commerce.
            </p>
          </div>

          <form
            className="lead-form"
            action="https://formspree.io/f/xbdzaoqk"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Landing Page Lead" />

            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />

            <label htmlFor="message">What do you want to launch?</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us about your digital content or marketplace idea"
              required
            ></textarea>

            <button className="btn btn-primary submit-btn" type="submit">
              Join the List
            </button>
          </form>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="brand">
            <img className="brand-mark" src="/pinnacle-logo.svg" alt="Pinnacle Dev Studio logo" />
            Pinnacle Dev Studio
          </p>
          <p className="footer-copy">Lesly Max Dsouza</p>
        </div>
        <a className="btn btn-primary" href="mailto:hello@pinnacledevstudio.com">
          Contact Us
        </a>
      </footer>
    </div>
  )
}

export default App
