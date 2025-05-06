import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const styles = {
    projectCard: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: isHovered 
        ? '0 10px 30px rgba(59, 130, 246, 0.15)' 
        : '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.4s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transform: isHovered ? 'translateY(-10px)' : 'none',
    },
    imageContainer: {
      height: '200px',
      position: 'relative',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.8s ease',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 0.3s ease',
    },
    projectLinks: {
      display: 'flex',
      gap: '1rem',
      transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
      opacity: isHovered ? 1 : 0,
      transition: 'all 0.4s ease',
    },
    githubLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
      backgroundColor: '#24292e',
    },
    demoLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
      backgroundColor: '#3b82f6',
    },
    icon: {
      width: '1rem',
      height: '1rem',
    },
    content: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '0.75rem',
      position: 'relative',
      display: 'inline-block',
    },
    description: {
      color: '#6b7280',
      fontSize: '0.95rem',
      lineHeight: 1.5,
      marginBottom: '1.25rem',
    },
    techStack: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginTop: 'auto',
    },
    techTag: {
      backgroundColor: '#e0f2fe',
      color: '#3b82f6',
      fontSize: '0.75rem',
      fontWeight: '500',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      transition: 'all 0.3s ease',
    },
  };

  // Internal stylesheet for hover effects and pseudo-elements
  const internalStyles = `
    .project-title::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: ${isHovered ? '100%' : '2rem'};
      height: 3px;
      background-color: #3b82f6;
      transition: width 0.3s ease;
    }

    .project-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .tech-tag:hover {
      background-color: #3b82f6;
      color: white;
      transform: scale(1.05);
    }
  `;

  return (
    <>
      <style>{internalStyles}</style>
      <div 
        style={styles.projectCard}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.imageContainer}>
          <img 
            src={project.image} 
            alt={project.title} 
            style={styles.image}
          />
          <div style={styles.overlay}>
            <div style={styles.projectLinks}>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.githubLink}
                className="project-link"
              >
                <svg style={styles.icon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.demoLink}
                className="project-link"
              >
                <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Demo
              </a>
            </div>
          </div>
        </div>
        <div style={styles.content}>
          <h3 style={styles.title} className="project-title">{project.title}</h3>
          <p style={styles.description}>{project.description}</p>
          <div style={styles.techStack}>
            {project.technologies.map((tech, index) => (
              <span key={index} style={styles.techTag} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;