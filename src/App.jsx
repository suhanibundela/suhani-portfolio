import { Mail, MapPin, Download, Sparkles } from "lucide-react";
import { profile, skills, projects, experience, education } from "./data/profile";

const A = ({ href, children, className = "" }) => (
  <a href={href} target="_blank" rel="noreferrer" className={className}>
    {children}
  </a>
);

function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        SB<span>.</span>
      </a>
      <div className="navlinks">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="heroText reveal">
        <p className="eyebrow">
          <Sparkles size={16} /> AI • GPUs • Tutorials • Product Marketing
        </p>

        <h1>
          Hi, I’m <span>{profile.name}</span>
        </h1>

        <h2>{profile.role}</h2>
        <p className="lead">{profile.tagline}</p>

        <div className="heroBtns">
          <a className="btn primary" href="#projects">
            View Portfolio
          </a>

          <a className="btn" href="/assets/Suhani_Marketing_Resume.pdf" download>
            <Download size={18} /> Marketing Resume
          </a>

          <a className="btn" href="/assets/Suhani_Developer_Resume.pdf" download>
            <Download size={18} /> Developer Resume
          </a>
        </div>

        <div className="socials">
          <A href={profile.linkedin}>LinkedIn</A>
          <A href={profile.github}>GitHub</A>
          <A href={profile.youtube}>YouTube</A>
          <A href={profile.instagramPersonal}>Instagram</A>
          <A href={`mailto:${profile.email}`}>
            <Mail size={18} /> Email
          </A>
        </div>
      </div>

   <div className="heroVisual reveal">
  <div className="glow"></div>
  <img
    src="/assets/profile-pink.jpeg"
    alt="Suhani Bundela"
    className="portrait"
  />
</div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section split">
      <div className="imageGrid reveal">
        <img src="/assets/neevcloud-laptop.jpeg" alt="NeevCloud laptop" />
        <img src="/assets/building.jpeg" alt="Office building" />
      </div>

      <div className="reveal">
        <p className="eyebrow">About Me</p>
        <h2 className="title">
          A mix of technical understanding, content, marketing, and development.
        </h2>

        <p className="text">
          I am a Computer Science student and currently working as a Technical
          Product Marketing Associate at NeevCloud. I enjoy creating simple
          explanations, product tutorials, technical walkthroughs, and
          beginner-friendly content around AI infrastructure, GPUs, and
          real-world tools.
        </p>

        <div className="info">
          <MapPin size={18} />
          {profile.location}
        </div>

        <div className="skillWrap">
          {skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <p className="eyebrow center">Experience & Education</p>
      <h2 className="title center">My learning and work journey</h2>

      <div className="timeline">
        {experience.map((e, i) => (
          <div className="timelineCard reveal" key={i}>
            <h3>{e.role}</h3>
            <p>
              {e.company} • {e.time}
            </p>
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}

        {education.map((e, i) => (
          <div className="timelineCard education reveal" key={i}>
            <h3>{e.degree}</h3>
            <p>
              {e.institute} • {e.time}
            </p>
            <strong>{e.meta}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow center">Projects</p>
      <h2 className="title center">Things I have worked on</h2>

      <div className="projectGrid">
        {projects.map((p, i) => (
          <div className="projectCard reveal" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div>
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Creator() {
  return (
    <section className="section creator reveal">
      <img src="/assets/youtube-banner.png" alt="Tech with Suhani banner" />

      <div>
        <p className="eyebrow">Creator Side</p>
        <h2>Tech with Suhani</h2>
        <p>
          I create educational content around AI, GPUs, tutorials, and practical
          learning.
        </p>

        <A href={profile.youtube} className="btn primary">
          Visit YouTube
        </A>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact reveal">
      <h2>Let’s build, learn, and grow together.</h2>

      <p>
        Let’s connect for collaborations and technical content.
      </p>

      <div className="contactProfile">

        <img
          src="/assets/professional-photo.jpeg"
          alt="Suhani Bundela"
          className="contactPhoto"
        />

        <div className="contactInfo">
          <h3>Suhani Bundela</h3>
          <p>Technical Product Marketing Associate</p>

          <div className="contactLinks">
            <A href={`mailto:${profile.email}`}>
              <Mail size={18}/> Email
            </A>

            <A href={profile.linkedin}>
              LinkedIn
            </A>

            <A href={profile.github}>
              GitHub
            </A>

            <A href={profile.instagramPersonal}>
              Instagram
            </A>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Creator />
        <Contact />
      </main>
      <footer>© 2026 Suhani Bundela ❤️</footer>
    </>
  );
}
