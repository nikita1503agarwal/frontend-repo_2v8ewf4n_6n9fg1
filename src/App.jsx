import React from 'react'

function App() {
  return (
    <div className="bg-dark text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            <span className="text-primary">Bootstrap</span> Site
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#showcase">Showcase</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item ms-lg-2">
                <a className="btn btn-primary btn-sm px-3" href="#get-started">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="hero-bg py-5 py-lg-6">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge rounded-pill text-bg-primary-subtle text-primary mb-3">New</span>
              <h1 className="display-5 fw-bold lh-1 mb-3">Build a beautiful website fast with Bootstrap</h1>
              <p className="lead text-secondary">Responsive by default, customizable, and packed with components to ship your next idea quickly.</p>
              <div className="d-flex gap-2 mt-4">
                <a href="#get-started" className="btn btn-primary btn-lg px-4">Get Started</a>
                <a href="#features" className="btn btn-outline-light btn-lg px-4">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden glass">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Demo video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Everything you need</h2>
            <p className="text-secondary">A modern toolkit to build responsive, accessible UIs.</p>
          </div>

          <div className="row g-4">
            {[
              {icon: 'bi-lightning-charge-fill', title: 'Fast', desc: 'Optimized components and utilities help you move quickly.'},
              {icon: 'bi-phone-fill', title: 'Responsive', desc: 'Mobile-first grid and utilities that scale beautifully.'},
              {icon: 'bi-shield-lock-fill', title: 'Secure', desc: 'Best practices to keep your users and data safe.'},
              {icon: 'bi-brush-fill', title: 'Customizable', desc: 'Theme variables make it easy to match your brand.'},
              {icon: 'bi-rocket-takeoff-fill', title: 'Production-ready', desc: 'Battle-tested patterns to launch with confidence.'},
              {icon: 'bi-gear-fill', title: 'Composable', desc: 'Mix and match components to build anything.'},
            ].map((f, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 bg-dark border-secondary glass">
                  <div className="card-body p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary fs-4 rounded-3 p-2 mb-3">
                      <i className={`bi ${f.icon}`}></i>
                    </div>
                    <h5 className="card-title">{f.title}</h5>
                    <p className="card-text text-secondary">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="section-padding bg-black">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 order-lg-2">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop" alt="Showcase" className="img-fluid rounded-4 border border-secondary" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold">Clean, modern layouts</h2>
              <p className="text-secondary">Use the grid, cards, and utilities to craft elegant interfaces that look great on any device.</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center gap-2 mb-2"><i className="bi bi-check2-circle text-success"></i> Simple, consistent design system</li>
                <li className="d-flex align-items-center gap-2 mb-2"><i className="bi bi-check2-circle text-success"></i> Dark mode friendly</li>
                <li className="d-flex align-items-center gap-2"><i className="bi bi-check2-circle text-success"></i> Ready-to-use examples</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Simple pricing</h2>
            <p className="text-secondary">Choose a plan that fits your needs.</p>
          </div>
          <div className="row g-4">
            {[
              {name: 'Starter', price: 'Free', features: ['Basic components', 'Community support', 'MIT license'], highlight: false},
              {name: 'Pro', price: '$12/mo', features: ['Everything in Starter', 'Premium sections', 'Email support'], highlight: true},
              {name: 'Teams', price: '$29/mo', features: ['Everything in Pro', 'Team seats', 'Priority support'], highlight: false},
            ].map((p, i) => (
              <div key={i} className="col-12 col-lg-4">
                <div className={`card h-100 ${p.highlight ? 'border-primary' : 'border-secondary'} bg-dark glass`}>
                  <div className="card-body p-4">
                    <h5 className="card-title d-flex align-items-center justify-content-between">
                      <span>{p.name}</span>
                      {p.highlight && <span className="badge text-bg-primary">Popular</span>}
                    </h5>
                    <h3 className="fw-bold mb-3">{p.price}</h3>
                    <ul className="list-unstyled mb-4">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="mb-2"><i className="bi bi-check2 me-2 text-success"></i>{f}</li>
                      ))}
                    </ul>
                    <a href="#get-started" className={`btn ${p.highlight ? 'btn-primary' : 'btn-outline-light'} w-100`}>Choose {p.name}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-black">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Get in touch</h2>
              <p className="text-secondary">Questions or feedback? Send us a message and we’ll get back to you.</p>
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="text-decoration-none text-secondary"><i className="bi bi-twitter-x me-2"></i>Twitter</a>
                <a href="#" className="text-decoration-none text-secondary"><i className="bi bi-github me-2"></i>GitHub</a>
                <a href="#" className="text-decoration-none text-secondary"><i className="bi bi-discord me-2"></i>Discord</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card bg-dark border-secondary glass">
                <div className="card-body p-4">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control bg-black text-light border-secondary" id="firstName" placeholder="Jane" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control bg-black text-light border-secondary" id="lastName" placeholder="Doe" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control bg-black text-light border-secondary" id="email" placeholder="jane@example.com" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control bg-black text-light border-secondary" id="message" rows="4" placeholder="How can we help?"></textarea>
                      </div>
                    </div>
                    <div className="d-grid mt-4">
                      <button className="btn btn-primary" type="submit">Send message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-top border-secondary py-4">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
          <div className="text-secondary">© {new Date().getFullYear()} Bootstrap Site. All rights reserved.</div>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link px-2 text-secondary" href="#features">Features</a></li>
            <li className="nav-item"><a className="nav-link px-2 text-secondary" href="#pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link px-2 text-secondary" href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
