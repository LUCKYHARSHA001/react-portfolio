import React from "react";
import "../styles/Heropage.css";
const Heropage = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="role-tag">FULL STACK DEVELOPER</p>
        <h1 className="main-heading">
          Building the <br />
          <span className="digital-future">Digital Future</span>.
        </h1>
        <p className="tagline">
          I design and build exceptional digital experiences that are fast,
          accessible, and visually stunning. Let's turn your vision into a
          reality.
        </p>
        <div className="cta-buttons">
          <a
            href="/resume26.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume →
          </a>
          
          <a
            href="mailto:harshaalla7@gmail.com"
            className="email-cta"
            aria-label="Email"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9A2.5 2.5 0 0 0 18.5 5h-13A2.5 2.5 0 0 0 3 7.5z" />
              <path d="M21 7.5L12 13 3 7.5" />
            </svg>
          </a>
          <a
            href="https://github.com/LUCKYHARSHA001"
            className="github-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/harshaalla7/"
            className="linkedin-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5z" />
              <path d="M0 8h5v16H0z" />
              <path d="M7 8h4.8v2.2h.1c.7-1.3 2.5-2.7 5.1-2.7 5.4 0 5.9 3.5 5.9 8.1V24H18v-5.9c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V24H7z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-graphic"></div>
    </div>
  );
};

export default Heropage;
