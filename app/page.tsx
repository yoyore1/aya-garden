const services = [
  {
    number: "01",
    title: "Landscape planning",
    text: "Planting concepts, site coordination and practical choices shaped around budget, programme and long-term care.",
    tone: "sand",
  },
  {
    number: "02",
    title: "Large-scale installation",
    text: "Site preparation, soft landscaping, pathways, edging and coordinated planting delivered by a hands-on crew.",
    tone: "aqua",
  },
  {
    number: "03",
    title: "Irrigation & water",
    text: "Efficient irrigation planning and installation for healthy landscapes with sensible water use in our island climate.",
    tone: "coral",
  },
  {
    number: "04",
    title: "Contract maintenance",
    text: "Reliable scheduled care for grounds that need to look welcoming every day—not only on handover day.",
    tone: "green",
  },
];

const sectors = [
  ["Hotels & resorts", "Arrival gardens, guest areas and grounds that stay immaculate in every season."],
  ["Malls & retail", "High-impact public landscapes planned around footfall, access and daily operations."],
  ["Condo developments", "Cohesive shared gardens, entrance statements and practical long-term upkeep."],
  ["Corporate & institutions", "Professional outdoor environments for offices, campuses and public-facing sites."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Aya Garden home">
            <img src="/aya-logo.png" alt="Aya Garden" />
          </a>
          <div className="navLinks">
            <a href="#services">Capabilities</a>
            <a href="#sectors">Sectors</a>
            <a href="#approach">How we work</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="navCta" href="#contact">Discuss a project</a>
        </nav>

        <div className="heroShade" />
        <div className="heroContent shell">
          <p className="eyebrow">Commercial landscaping · Across Mauritius</p>
          <h1>Grounds that<br />make an entrance.</h1>
          <p className="heroCopy">
            Large-scale landscape delivery and long-term care for hotels,
            retail destinations, residential developments and institutions.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#contact">Discuss your project <span>↗</span></a>
            <a className="button buttonGhost" href="#services">Explore capabilities</a>
          </div>
        </div>
        <div className="heroNote">
          <span className="heroNoteMark">✦</span>
          <span><b>One accountable team</b><small>Planning · Installation · Maintenance</small></span>
        </div>
      </section>

      <section className="intro section shell" aria-labelledby="intro-title">
        <p className="sectionKicker">Aya Garden / What we do</p>
        <div className="introGrid">
          <h2 id="intro-title">We bring big sites<br />to life—properly.</h2>
          <div className="introCopy">
            <p>
              A successful landscape has to look beautiful, work hard and stay
              healthy. Aya Garden brings the people, local plant knowledge and
              practical coordination needed to deliver all three.
            </p>
            <p>
              We work closely with owners, consultants and site teams—capable
              enough for complex projects, straightforward enough to be easy to work with.
            </p>
            <a className="textLink" href="#approach">See how we deliver <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="services section" id="services" aria-labelledby="services-title">
        <div className="shell">
          <div className="sectionTop">
            <div>
              <p className="sectionKicker">Capabilities</p>
              <h2 id="services-title">From bare ground<br />to lasting impact.</h2>
            </div>
            <p className="sectionLead">A complete landscaping partner, from early coordination to the care that follows.</p>
          </div>
          <div className="serviceGrid">
            {services.map((service) => (
              <article className={`serviceCard ${service.tone}`} key={service.title}>
                <span className="serviceNumber">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="cardArrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectors" id="sectors" aria-labelledby="sectors-title">
        <div className="sectorImage" role="img" aria-label="Aya Garden commercial landscaping team at work" />
        <div className="sectorContent">
          <p className="sectionKicker light">Built for bigger places</p>
          <h2 id="sectors-title">Landscapes people<br />remember.</h2>
          <div className="sectorList">
            {sectors.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="promise section">
        <div className="shell promiseGrid">
          <div>
            <p className="sectionKicker">Made for Mauritius</p>
            <h2>Big capability.<br />Island understanding.</h2>
          </div>
          <div className="promiseBody">
            <p>
              Tropical landscapes come with their own realities. We plan for
              sun, salt, heavy rain, cyclones and the demands of busy public places—without losing the beauty.
            </p>
            <div className="promiseTags" aria-label="Project strengths">
              <span>Scalable site teams</span>
              <span>Phased around operations</span>
              <span>Island-suited planting</span>
              <span>Clear site coordination</span>
              <span>Long-term grounds care</span>
            </div>
          </div>
        </div>
      </section>

      <section className="approach section" id="approach" aria-labelledby="approach-title">
        <div className="shell">
          <div className="sectionTop">
            <div>
              <p className="sectionKicker light">Our approach</p>
              <h2 id="approach-title">Clear from day one.</h2>
            </div>
            <p className="sectionLead lightText">A simple, well-managed path from first site walk to a landscape that keeps performing.</p>
          </div>
          <div className="steps">
            <article><b>01</b><h3>Walk the site</h3><p>We listen, inspect the conditions and understand programme, access and expectations.</p></article>
            <article><b>02</b><h3>Plan the delivery</h3><p>We align the planting, people, logistics and maintenance needs before mobilisation.</p></article>
            <article><b>03</b><h3>Build with care</h3><p>Our crew coordinates with the wider site team and delivers in sensible phases.</p></article>
            <article><b>04</b><h3>Keep it thriving</h3><p>We hand over clearly or stay on to maintain the grounds to a consistent standard.</p></article>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="contactLeaf one" aria-hidden="true" />
        <div className="contactLeaf two" aria-hidden="true" />
        <div className="shell contactGrid">
          <div>
            <p className="sectionKicker">Start a conversation</p>
            <h2 id="contact-title">Planning something<br />with real scale?</h2>
            <p className="contactIntro">Tell us what is taking shape. We’ll arrange a site discussion and take it from there—simple.</p>
            <div className="contactNote"><span>MU</span><p><b>Island-wide projects</b><small>Hotels · Retail · Residential · Institutional</small></p></div>
          </div>
          <form className="projectForm" action="#contact">
            <label>Project type
              <select name="project-type" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Hotel or resort</option>
                <option>Mall or retail centre</option>
                <option>Condo or residential development</option>
                <option>Corporate or institutional</option>
                <option>Other large-scale project</option>
              </select>
            </label>
            <div className="formRow">
              <label>Your name<input name="name" placeholder="Name" required /></label>
              <label>Phone / email<input name="contact" placeholder="Best way to reach you" required /></label>
            </div>
            <label>Project location<input name="location" placeholder="Where in Mauritius?" /></label>
            <label>Tell us about the site<textarea name="brief" placeholder="Scope, stage, timeline or anything useful" rows={4} /></label>
            <button className="button formButton" type="submit">Request a site discussion <span>↗</span></button>
            <small className="formSmall">No long forms. Just enough to start the right conversation.</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footerTop">
          <a className="footerBrand" href="#home"><img src="/aya-logo.png" alt="" /><span>Aya Garden<small>Commercial landscaping · Mauritius</small></span></a>
          <div className="footerLinks"><a href="#services">Capabilities</a><a href="#sectors">Sectors</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div>
        </div>
        <div className="shell footerBottom"><span>© 2026 Aya Garden</span><span>Landscapes made to belong.</span></div>
      </footer>
    </main>
  );
}
