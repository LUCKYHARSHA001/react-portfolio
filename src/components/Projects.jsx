import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectsList = [
     {
      id: 1,
      title: "Devsync",
      description:
        "DevSync is a real-time, coding accountability platform that allows developers to create study circles, and solve coding challenges together.",
      tags: ["React", "Express", "Websockets","MongoDB", "Redis", "BullMQ"],
      imageUrl: "https://picsum.photos/seed/nebula/600/400",
      link: "https://dev2sync.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/devSync",
    },
     {
      id: 2,
      title: "ExamReady",
      description:
        "ExamReady is a high-performance web application designed to help students optimize their exam preparation. By uploading course syllabus or chapter PDFs, students receive custom-tailored, high-yield study guides .",
      tags: ["React", "Node.js", "MongoDB", "Redis", "BullMQ"],
      imageUrl: "https://picsum.photos/seed/nebula/600/400",
      link: "https://examready006.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/examhelp",
    },
    {
      id: 3,
      title: "SkillHance",
      description:
        "A real-time platform that provides overview about engineering branches and coding fundementals.",
      tags: ["React", "Node.js", "Express"],
      imageUrl: "https://picsum.photos/seed/nebula/600/400",
      link: "https://skillhance-lovat.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/skillhance",
    },
    {
      id: 4,
      title: "USB Physical Security",
      description:
        "A robust security feature for unidentified threats aiming at ports.",
      tags: ["React", "flask", "openCV", "SMTP"],
      imageUrl: "https://picsum.photos/seed/nebula/600/400",
      link: "https://usbphysicalsec.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/usb_physical",
    },
    {
      id: 5,
      title: "Credit Risk System",
      description:
        "A platform focused on reducing number of frauds in the time of loans",
      tags: ["Flutter", "Node Js", "machine learning"],
      imageUrl: "https://picsum.photos/seed/nebula/600/400",
      link: "https://credit-risk-system-loan.netlify.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/Credit_Risk_System",
    },
    {
      id: 6,
      title: "FindJob",
      description:
        "A daily based application used for finding jobs based on the particular locations",
      tags: ["React", "Node", "CSS"],
      imageUrl: "https://picsum.photos/seed/nebula/600/400",
      link: "https://find-job-final.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/findJob_final",
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--rotateX", `0deg`);
    card.style.setProperty("--rotateY", `0deg`);
  };

  return (
    <div>
      <div className="projects-page-top" id="Projects">
        <h1>Missionary</h1>
        <p>
          Exploration of digital frontiers through code. Hover over a data-pad
          to analyze mission details.
        </p>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div className="perspective-container" key={project.id}>
              <div
                className="project-card group"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="corner-bracket top-left" />
                <div className="corner-bracket bottom-right" />

                <div className="card-content">
                  <div className="card-image-wrapper">
                    <div className="image-overlay" />
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="card-image"
                    />
                  </div>

                  <div className="card-text-area">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>

                    <div>
                      <div className="tags-row">
                        {project.tags.map((tag, index) => (
                          <span className="tag" key={index}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="card-footer card-actions">
                        <a
                          href={project.link}
                          className="view-project-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Demo
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </a>

                        <a
                          href={project.githubLink}
                          className="github-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 15.13V19h0z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
