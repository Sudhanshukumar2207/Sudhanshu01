import { useState } from 'react'
import './App.css'

const currentYear = new Date().getFullYear()

const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { category: 'Backend', items: ['Node.js', 'Express.js'] },
  { category: 'Languages', items: ['C', 'Java', 'Python'] },
  { category: 'Database', items: ['MySQL'] },
]

const education = [
  { year: '2025', title: 'Master of Computer Applications', institution: 'VGU', result: '8 CGPA' },
  { year: '2023', title: 'Bachelor of Computer Applications', institution: 'BD College', result: '62%' },
  { year: '2020', title: 'Class 12 · CBSE', institution: '', result: '73%' },
  { year: '2017', title: 'Class 10 · CBSE', institution: '', result: '9.6 CGPA' },
]

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Sudhanshu Kumar, home">
          <span className="wordmark-mark">S<span>K</span></span>
          <span className="wordmark-name">Sudhanshu Kumar</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Get in touch <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Hello, I’m Sudhanshu</p>
            <h1>Building my path<br />in <span>web development.</span></h1>
            <p className="hero-intro">
              A computer applications graduate with a foundation in web technologies
              and a curiosity for how things work.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Let’s connect <ArrowIcon /></a>
              <a className="text-link" href="#about">A little about me <span>↓</span></a>
            </div>
            <div className="hero-contact">
              <a href="mailto:sudhanshukumar2207@gmail.com">sudhanshukumar2207@gmail.com</a>
              <span className="contact-divider" />
              <a href="tel:+919661542794">+91 96615 42794</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <span className="art-spark spark-one">✳</span>
            <span className="art-spark spark-two">✳</span>
            <div className="portrait-frame">
              <img
                className="portrait-photo"
                src="/sudhanshu-kumar.jpg"
                alt="Sudhanshu Kumar"
                fetchPriority="high"
              />
            </div>
            <span className="art-caption">Sudhanshu Kumar<br />Web development enthusiast</span>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /> Scroll to explore</a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / A bit about me</p>
            <h2>Learning, building,<br /><span>and moving forward.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              I’m Sudhanshu Kumar, a web development enthusiast with a background in
              computer applications.
            </p>
            <p>
              My studies have given me experience across frontend and backend
              technologies, programming languages, and databases. I’m currently
              working at Bizneeti Services Pvt. Ltd. and continuing to grow through
              hands-on experience.
            </p>
            <p>
              Away from the screen, I enjoy trekking and traveling—both are a good
              reminder to stay curious and take the scenic route sometimes.
            </p>
            <a className="text-link about-link" href="#contact">Say hello <ArrowIcon diagonal /></a>
          </div>
        </section>

        <section className="skills section-wrap section-pad" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / The toolkit</p>
            <h2>Things I’ve been<br /><span>learning and using.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.category}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap section-pad" id="experience">
          <div className="section-heading">
            <p className="eyebrow">03 / Experience</p>
            <h2>Where I’m<br /><span>working today.</span></h2>
          </div>
          <article className="experience-card">
            <div className="experience-date"><span className="status-dot" /> 2025 — Present</div>
            <div className="experience-details">
              <h3>Bizneeti Services Pvt. Ltd.</h3>
              <p>Currently working here since 2025.</p>
            </div>
            <span className="experience-index">01</span>
          </article>
        </section>

        <section className="education section-wrap section-pad" id="education">
          <div className="section-heading">
            <p className="eyebrow">04 / Education</p>
            <h2>A foundation for<br /><span>what comes next.</span></h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-row" key={item.year}>
                <span className="education-year">{item.year}</span>
                <div className="education-details">
                  <h3>{item.title}</h3>
                  {item.institution && <p>{item.institution}</p>}
                </div>
                <span className="education-result">{item.result}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-topline">
            <p className="eyebrow">05 / Get in touch</p>
            <span className="contact-spark">✳</span>
          </div>
          <h2>Let’s start a<br /><span>conversation.</span></h2>
          <p className="contact-intro">I’d be glad to hear from you. Reach out by email or phone.</p>
          <div className="contact-links">
            <a className="contact-email" href="mailto:sudhanshukumar2207@gmail.com">
              sudhanshukumar2207@gmail.com <ArrowIcon diagonal />
            </a>
            <a className="contact-phone" href="tel:+919661542794">+91 96615 42794</a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-name" href="#home">Sudhanshu Kumar<span>.</span></a>
        <p>Designed with care · {currentYear}</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
