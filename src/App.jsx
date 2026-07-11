<h1 style={{color:"red"}}>
Portfolio Loaded
</h1>

import { useState } from "react";
import "./App.css";

function App() {
  const [showCertificate, setShowCertificate] = useState(false);
    const certificates = [
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI - Coursera      (2025)",
    image: "/certificates/Ai-for-everyone1.jpg",
  },
  {
    title: "Python ",
    issuer: "Introduction to Python in Penn University of Pennsylvania – Coursera (2025) ",
    image: "/certificates/python4.jpg",
  },
  {
    title: "Java",
    issuer: "Spoken Tutorial IIT Bombay (2025)",
    image: "/certificates/java.jpg",
  },
  {
    title: "Data Science and Analytics",
    issuer: "HP Life (2025)",
    image: "/certificates/datascience7.jpg",
  },
  {
    title: "Python",
    issuer: "Spoken Tutorial IIT Bombay (2025)",
    image: "/certificates/python3.4.3.jpg",
  },
  {
    title: "Introduction to Front End Development",
    issuer: "Meta - Coursera (2025)",
    image: "/certificates/meta5.jpg",
  },
  {
    title: "Getting Started Using Google Analytics",
    issuer: "Google (2025)",
    image: "/certificates/Google Analytics6.jpg",
  },
  {
    title: "Introduction to AI Concepts",
    issuer: "Microsoft (2026)",
    image: "/certificates/ai concept13.jpg",
  },
  {
    title: "Getting Started with Front End & Web Development",
    issuer: "IBM - Coursera (2026)",
    image: "/certificates/ibm9.jpg",
  },
  {
    title: "Digital Input And Output Analog Input And Output",
    issuer: "Infosys Springboard (2025)",
    image: "/certificates/io infosys.jpg",
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x (2026)",
    image: "/certificates/be10x2.jpg",
  },
  {
    title: "Automate Development Tasks By GitHub Actions",
    issuer: "MicroSoft (2026)",
    image: "/certificates/github microsoft12.jpg",
  },
  {
    title: "Introduction to Generative AI and Agents",
    issuer: "Microsoft (2026)",
    image: "/certificates/microsoft ai 11.jpg",
  },
  {
    title: "Blockchain ",
    issuer: "Blockchain (2026)",
    image: "/certificates/blockchain3.jpg",
  },
  {
    title: "Getting Started with MongoDB Atlas",
    issuer: "MongoDB (2024)",
    image: "/certificates/mongodb15.jpg",
  },
  {
    title: "Power BI Fundamentals",
    issuer: "Microsoft (2026)",
    image: "/certificates/powerbi14.jpg",
  },
   

  {
    title: "AI Business",
    issuer: "HP Life (2026)",
    image: "/certificates/ai business8.jpg",
  }
];
  return (
    <>
      {/* Navbar */}
<nav className="navbar">

    <span>Ruba</span>

        <ul>
  <li><a href="#Home">Home</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#internship">Internship</a></li>
  <li><a href="#certificates">Certificates</a></li>
  <li><a href="#papers">Papers</a></li>
  <li><a href="#achievements">Achievements</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
      </nav>

{/* Home */}
<section id="Home" className="Hero">

  <div className="hero-left">

    <img src="/mylogo.jpg" alt="Ruba Logo" className="hero-image" />

      <h2>Ruba Balakrishnan</h2>

    <h2>Web Developer | Cloud Learner</h2>

    <p className="hero-desc">
      A Computer Science student passionate about building innovative
      and impactful solutions through code.
    </p>

    <a href="/resume.pdf" download="Ruba_B_Resume.pdf">
      <button>📄 Download Resume</button>
    </a>

  </div>

</section>
         
      {/* Technical Skills */}
<section id="skills" className="skills">

  <h2>Technical Skills</h2>

  <div className="skills-slider">

    <div className="skills-track">

      <span>Python</span>
      <span>•</span>

      <span>Java</span>
      <span>•</span>

      <span>SQL</span>
      <span>•</span>

      <span>MySQL</span>
      <span>•</span>

      <span>HTML</span>
      <span>•</span>

      <span>CSS</span>
      <span>•</span>

      <span>Python</span>
      <span>•</span>

      <span>Java</span>
      <span>•</span>

      <span>SQL</span>
      <span>•</span>

      <span>MySQL</span>
      <span>•</span>

      <span>HTML</span>
      <span>•</span>

      <span>CSS</span>
      <span>•</span>

  

    </div>

  </div>

</section>
      {/* Projects */}
      <section id="projects" className="projects">
        <h2>💼 My Projects</h2>

        <p className="project-subtitle">
          Building practical applications to apply my learning
        </p>

        <div className="projects-container">

          <div className="project-card">
            <div className="project-top">
              <h1>1</h1>
            </div>

            

            <div className="project-content">
              <h3>Portfolio Website</h3>

              <p>
                Responsive portfolio built using React and CSS.
              </p>

              <div className="tags">
                <span>React</span>
                <span>CSS</span>
                <span>HTML</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Internship */}
      <section id="internship" className="internship">
        <h2>💼 Internship</h2>

        <div className="internship-card">


          <h3>Web Developer Internship</h3>

          <p><strong>Organization:</strong> LetsGame Tech</p>

          <p><strong>Role:</strong> Web Developer Intern</p>

          <p><strong>Duration:</strong> 20 Days</p>

          <a 
  href="/internship.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="view-btn">
    📄 View Internship Certificate
  </button>
</a>

        </div>

        {/* Certificate Popup */}
        {showCertificate && (
          <div
            className="modal"
            onClick={() => setShowCertificate(false)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="close"
                onClick={() => setShowCertificate(false)}
              >
                &times;
              </span>

              <img
                src="/internship.png"
                alt="Internship Certificate"
              />
            </div>
          </div>
        )}

      </section>
              <section id="certificates" className="certificates">
  <h2>📜 My Certificates </h2>

  <div className="certificate-grid">
    {certificates.map((cert, index) => (
      <div className="certificate-card" key={index}>
        <div className="certificate-inner">

          <div className="certificate-front">
            <h3>📜 {cert.title}</h3>
            <p>{cert.issuer}</p>
          </div>

          <div className="certificate-back">
            <img src={cert.image} alt={cert.title} />
          </div>

        </div>
      </div>
    ))}
  </div>
</section>

<section id="papers" className="papers">
  <h2>📄 Paper Presentations</h2>

  <div className="papers-container">

    <div className="paper-card">
      <div className="paper-number">01</div>

      <h3>GenLink</h3>

      <p>RVS College of Arts and Science</p>

      <a href="/genlink.pdf" target="_blank" rel="noopener noreferrer">
        <button>📄 View PDF</button>
      </a>
    </div>

    <div className="paper-card">
      <div className="paper-number">02</div>

      <h3>Elevix</h3>

      <p>KG College of Arts and Science</p>

      <a href="/Elevix.pdf" target="_blank" rel="noopener noreferrer">
        <button>📄 View PDF</button>
      </a>
    </div>

  </div>
</section>
       <section id="achievements" className="achievements">
  <h2>🏆 Key Achievements</h2>

  <div className="achievement-container">

    <div className="achievement-card">
      <div className="achievement-icon">🎓</div>

      <h3>Internshala Student Partner (ISP)</h3>

      <p>
        Participated in the <strong>Internshala Student Partner (ISP)</strong>
        campus ambassador program and developed leadership,
        communication, networking, and student engagement skills.
      </p>

      <span className="achievement-org">Internshala</span>
    </div>

    <div className="achievement-card">
      <div className="achievement-icon">🏅</div>

      <h3>Google Skills Boost</h3>

      <p>
        Achieved <strong>14 Google Skills Badges</strong> by completing
        learning modules in Artificial Intelligence, Cloud Computing,
        and Emerging Technologies.
      </p>

      <a
        href="https://www.skills.google/public_profiles/9bf3a960-c130-428c-a935-dd8381918e3a"
        target="_blank"
        rel="noopener noreferrer"
        className="achievement-btn"
      >
        View Google Skills Profile
      </a>
    </div>

  </div>
</section>
      <section id="contact" className="contact">
  <h2>📬 Contact Me</h2>

  <p className="contact-subtitle">
    Feel free to contact me for internships, projects, or collaborations.
  </p>

  <div className="contact-container">

    <div className="contact-card">

      <h3>RUBA B</h3>

      <div className="contact-item">
        <span>📞</span>
        <a href="tel:+918122119105">
          +91 81221 19105
        </a>
      </div>

      <div className="contact-item">
        <span>📧</span>
        <a
          href="mailto:rubabalakrishnanp@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Ruba,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
        >
          rubabalakrishnanp@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <span>💼</span>
        <a
          href="https://www.linkedin.com/in/ruba-balakrishnan-9559b831b"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/ruba-balakrishnan-9559b831b
        </a>
      </div>

    </div>

  </div>

  <footer className="footer">
    © 2026 Ruba Balakrishnan| All Rights Reserved
  </footer>
</section>
    </>
  );
}

export default App;