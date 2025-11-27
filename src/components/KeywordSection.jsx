import { useState } from "react";
import "../styles/KeywordSection.css";

export default function KeywordSection({ keywords }) {
  const [showAll, setShowAll] = useState(false);

  const visibleKeywords = showAll ? keywords : keywords.slice(0, 20);

  return (
    <div className="keyword-section">
      <h2 className="keyword-heading">Keywords</h2>

      <div className="keyword-grid">
        {visibleKeywords.map((word, i) => (
          <span key={i} className="keyword-chip">
            {word}
          </span>
        ))}
      </div>

      {keywords.length > 20 && (
        <button
          className="keyword-toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less ▲" : "Show More ▼"}
        </button>
      )}
    </div>
  );
}
