import React from 'react';

const Projects = () => {
  const styles = {
    section: {
      padding: '5rem 0',
      background: 'linear-gradient(to bottom, #1E3A8A, #312e81, #4B0082)',
      color: 'white'
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    headerContainer: {
      textAlign: 'center',
      marginBottom: '4rem',
      position: 'relative'
    },
    accentText: {
      color: '#f472b6',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: '0.875rem'
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: 'white',
      margin: '0.5rem 0 1rem'
    },
    divider: {
      width: '6rem',
      height: '0.25rem',
      background: 'linear-gradient(to right, #ec4899, #9333ea)',
      margin: '0 auto 1.5rem',
      borderRadius: '0.25rem'
    },
    subtitle: {
      color: '#e2e8f0',
      maxWidth: '42rem',
      margin: '0 auto',
      fontSize: '1.125rem',
      lineHeight: '1.75'
    },
    decorCircle1: {
      position: 'absolute',
      top: '-2.5rem',
      left: '30%',
      width: '5rem',
      height: '5rem',
      backgroundColor: '#ec4899',
      borderRadius: '50%',
      opacity: '0.3',
      filter: 'blur(24px)'
    },
    decorCircle2: {
      position: 'absolute',
      bottom: '-2.5rem',
      right: '30%',
      width: '5rem',
      height: '5rem',
      backgroundColor: '#9333ea',
      borderRadius: '50%',
      opacity: '0.3',
      filter: 'blur(24px)'
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem'
    },
    projectCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.7)',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
      transform: 'translateY(0)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    },
    imageContainer: {
      width: '100%',
      height: '240px',
      overflow: 'hidden',
      position: 'relative'
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(79, 70, 229, 0.2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    viewButton: {
      backgroundColor: '#ec4899',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.3)',
      transform: 'translateY(20px)',
      transition: 'all 0.3s ease'
    },
    contentContainer: {
      padding: '1.5rem'
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    tag: {
      backgroundColor: 'rgba(236, 72, 153, 0.2)',
      color: '#f472b6',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500'
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'white',
      marginBottom: '0.5rem'
    },
    projectDescription: {
      color: '#e2e8f0',
      marginBottom: '1.5rem',
      lineHeight: '1.625'
    },
    links: {
      display: 'flex',
      gap: '1rem'
    },
    linkButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#f472b6',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'color 0.3s ease'
    },
    linkIcon: {
      width: '1.25rem',
      height: '1.25rem'
    }
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "LexAI",
      description: "The LexAI Resume Builder is a cross-platform mobile application built with React Native and Expo. It allows users to create professional resumes and cover letters, with a streamlined form-based workflow and integrated document management",
      image: "/images/portfolio.jpg",
      tags: ["React-Native", "TypScripts", "Tailwind CSS"],
      demoLink: "https://LexAI",
      codeLink: "https://github.com/MohamedNoorA/LexAI"
    },
    {
      id: 2,
      title: "MediChatAI",
      description: "MediChatAI is an AI-powered medical chat application designed to provide quick, reliable health information and support..",
      image: "src/assets/images/medichat.png",
      tags: ["React", "Node.js",],
      demoLink: "https://medichatAI.com",
      codeLink: "https://github.com/MohamedNoorA/medichatAI"
    },
    {
      id: 3,
      title: "Math game for Kids",
      description: "a website for kids that are not good in math to be at their best for much practises.",
      image: "src/assets/images/math.png",
      tags: ["html", "JavaScript", "CSS"],
      demoLink: "https://mohamednoora.github.io/math-game/javaScript/index.html",
      codeLink: "https://mohamednoora.github.io/math-game"
    }
  ];

  // Media query for responsive design
  if (window.matchMedia('(min-width: 768px)').matches) {
    styles.projectGrid = {
      ...styles.projectGrid,
      gridTemplateColumns: 'repeat(2, 1fr)'
    };
  }

  if (window.matchMedia('(min-width: 1024px)').matches) {
    styles.projectGrid = {
      ...styles.projectGrid,
      gridTemplateColumns: 'repeat(3, 1fr)'
    };
  }

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <span style={styles.accentText}>Portfolio</span>
          <h2 style={styles.heading}>Recent Projects</h2>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>
            Here are some of my recent works. Each project represents my commitment to quality and attention to detail.
          </p>
          <div style={styles.decorCircle1}></div>
          <div style={styles.decorCircle2}></div>
        </div>
        
        <div style={styles.projectGrid}>
          {projects.map(project => (
            <div 
              key={project.id} 
              style={styles.projectCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 30px -5px rgba(0, 0, 0, 0.3)';
                e.currentTarget.querySelector('.overlay').style.opacity = '1';
                e.currentTarget.querySelector('.view-button').style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.project-image').style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
                e.currentTarget.querySelector('.overlay').style.opacity = '0';
                e.currentTarget.querySelector('.view-button').style.transform = 'translateY(20px)';
                e.currentTarget.querySelector('.project-image').style.transform = 'scale(1)';
              }}
            >
              <div style={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={styles.projectImage}
                  className="project-image"
                />
                <div style={styles.overlay} className="overlay">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.viewButton}
                    className="view-button"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div style={styles.contentContainer}>
                <div style={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.links}>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.linkButton}
                    onMouseOver={(e) => {
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#f472b6';
                    }}
                  >
                    <svg style={styles.linkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.linkButton}
                    onMouseOver={(e) => {
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#f472b6';
                    }}
                  >
                    <svg style={styles.linkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 0.7;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;