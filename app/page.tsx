import { WhatsAppContact } from "./WhatsAppContact";

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

      <section className="impactRail" aria-label="Aya Garden strengths">
        <div className="shell impactRailInner">
          <div><span>01</span><b>Commercial-first</b><small>Hotels, retail, developments & institutions</small></div>
          <div><span>02</span><b>Mobilised for scale</b><small>Site teams shaped around the programme</small></div>
          <div><span>03</span><b>One partner, end to end</b><small>Installation, irrigation & ongoing care</small></div>
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

      <section className="signature section" aria-labelledby="signature-title">
        <div className="shell signatureGrid">
          <p className="sectionKicker">The Aya standard</p>
          <div>
            <h2 id="signature-title">Made to perform.<br /><em>Made to belong.</em></h2>
            <p>Premium does not mean loud. It means every entrance feels considered, every planting choice makes sense, and the whole landscape gets better with time.</p>
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
        <div className="sectorImage" role="img" aria-label="Tropical commercial landscape designed for Mauritius">
          <div className="imageCaption"><span>MU</span><p><b>Designed for island conditions</b><small>Beauty, resilience and practical care</small></p></div>
        </div>
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

      <section className="standards section" aria-labelledby="standards-title">
        <div className="shell">
          <div className="standardsHeading">
            <p className="sectionKicker">The work behind the finish</p>
            <h2 id="standards-title">Premium on the surface.<br />Serious underneath.</h2>
            <p>Large projects need more than beautiful planting. They need a landscape team that understands the programme, the people and what happens after handover.</p>
          </div>
          <div className="standardsGrid">
            <article><span>01</span><h3>Mobilisation</h3><p>Crews and materials planned around access, phasing and the wider site programme.</p></article>
            <article><span>02</span><h3>Coordination</h3><p>Clear communication with owners, consultants, contractors and operational teams.</p></article>
            <article><span>03</span><h3>Quality control</h3><p>Careful preparation, planting and finishing—not a rushed green layer at the end.</p></article>
            <article><span>04</span><h3>Aftercare</h3><p>Practical handover and reliable maintenance options so the landscape keeps its promise.</p></article>
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
          <WhatsAppContact />
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
