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
          <div className="nav-actions">
            <a className="nav-link" href="#products">
              Products
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link nav-link-cta" href="#contact">
              Start a Project
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Built by Lesly Max Dsouza</p>
          <h1>Venture Studio & Technology Lab for Product-First Builders</h1>
          <p className="lead">
            Pinnacle Dev Studio is a venture studio and technology lab. We partner with
            visionaries and non-technical founders to incubate, engineer, and launch
            scalable digital products.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#services">
              What We Do
            </a>
            <a className="btn btn-secondary" href="#products">
              View Products
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="section">
          <h2>Our Mission</h2>
          <p className="section-lead">
            Pinnacle Dev Studio is a venture studio and technology lab. We partner with
            visionaries and non-technical founders to incubate, engineer, and launch
            scalable digital products. We don't just write code; we take raw ideas and
            provide the complete technical infrastructure, end-to-end development, and
            cloud deployment required to bring innovative software to market. If you
            have the vision, we provide the technical backbone to build and publish
            your product.
          </p>

          <h2 className="section-title">What We Deliver</h2>
          <div className="grid">
            <article className="card">
              <h3>Product Incubation & MVP Engineering</h3>
              <p>
                Rapid prototyping, validation, and full-stack MVP builds designed to
                get your product into users' hands fast.
              </p>
            </article>
            <article className="card">
              <h3>End-to-End Development</h3>
              <p>
                From UI to backend to integrations—production-grade engineering that
                supports growth, reliability, and maintainability.
              </p>
            </article>
            <article className="card">
              <h3>Cloud Deployment & Technical Infrastructure</h3>
              <p>
                Secure hosting, CI/CD, observability, and scalable architecture so your
                launch is stable from day one.
              </p>
            </article>
          </div>
        </section>

        <section id="products" className="section">
          <h2>Products Incubated by Pinnacle</h2>
          <p className="section-lead">
            A small sample of what we've built (and what we're currently building). If
            you have a vision, we'll help you engineer and ship it.
          </p>

          <div className="portfolio-grid">
            <article className="portfolio-card">
              <div className="portfolio-media" aria-hidden="true">
                <p className="portfolio-placeholder">Screenshot coming soon</p>
              </div>
              <div className="portfolio-body">
                <h3>Digital Content Delivery Platform</h3>
                <p>
                  A secure, creator-friendly experience for selling and delivering
                  downloads, courses, and premium content.
                </p>
                <a className="portfolio-link" href="#contact">
                  Request a demo
                </a>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-media" aria-hidden="true">
                <p className="portfolio-placeholder">Screenshot coming soon</p>
              </div>
              <div className="portfolio-body">
                <h3>Future-Ready Marketplace Roadmap</h3>
                <p>
                  The infrastructure plan that evolves digital delivery into a
                  buyer–seller marketplace for physical and digital goods.
                </p>
                <a className="portfolio-link" href="#roadmap">View the roadmap</a>
              </div>
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

        <section id="about" className="section about">
          <h2>Who We Are</h2>
          <p className="section-lead">
            Pinnacle Dev Studio is led by Lesly Max Dsouza, a dedicated technical
            founder and software engineer. Built on the belief that great ideas
            shouldn't be blocked by technical barriers, the studio partners directly
            with clients to incubate and engineer their concepts into reality. By
            handling the complete technical infrastructure, end-to-end development,
            and cloud deployment, Lesly Max Dsouza acts as a dedicated technical
            partner to bring innovative software to market.
          </p>

          <div className="founder-grid">
            <article className="founder-card">
              <div className="founder-avatar" aria-hidden="true"></div>
              <div>
                <h3 className="founder-name">[Name]</h3>
                <p className="founder-role">Technical Director / Founder</p>
                <a className="founder-link" href="[Link to LinkedIn]" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </article>

            <article className="founder-card">
              <div className="founder-avatar" aria-hidden="true"></div>
              <div>
                <h3 className="founder-name">[Name]</h3>
                <p className="founder-role">Head of Product / Co-Founder</p>
                <a className="founder-link" href="www.linkedin.com/in/lesly96" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </article>
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
              placeholder="Tell us about your product idea"
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
