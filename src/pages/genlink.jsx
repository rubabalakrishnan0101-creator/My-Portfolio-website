import "./Paper.css";

function GenLink() {
  return (
    <div className="paper-page">
      <div className="paper-box">

        <h1>🧬 GenLink</h1>

        <h3>Paper Presentation</h3>

        <p><strong>College:</strong> RVS College of Arts and Science</p>

        <p><strong>Year:</strong> 2026</p>

        <p>
          GenLink is a paper presentation focused on innovative technologies and
          their real-world applications.
        </p>

        <a
          href="/genlink.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>📄 View Presentation PDF</button>
        </a>

      </div>
    </div>
  );
}

export default GenLink;