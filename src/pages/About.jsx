import React from 'react';

const About = () => {
  const styles = {
    section: {
      padding: '5rem 0',
      background: 'linear-gradient(to bottom right, #4B0082, #1E3A8A, #1E40AF)',
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
      left: '-2.5rem',
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
      right: '-2.5rem',
      width: '5rem',
      height: '5rem',
      backgroundColor: '#9333ea',
      borderRadius: '50%',
      opacity: '0.3',
      filter: 'blur(24px)'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    },
    column: {
      width: '100%'
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: 'white',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      width: '1.5rem',
      height: '1.5rem',
      marginRight: '0.5rem',
      color: '#f472b6'
    },
    card: {
      backgroundColor: 'rgba(31, 41, 55, 0.7)',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      marginBottom: '1.5rem',
      transition: 'all 0.3s ease',
      borderLeft: '4px solid #ec4899',
      backdropFilter: 'blur(10px)'
    },
    schoolName: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#f472b6',
      marginBottom: '0.5rem'
    },
    degree: {
      color: '#e2e8f0',
      marginBottom: '0.5rem'
    },
    year: {
      color: '#cbd5e1',
      fontSize: '0.875rem'
    },
    experienceCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.7)',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      borderLeft: '4px solid #ec4899',
      backdropFilter: 'blur(10px)'
    },
    jobTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#f472b6',
      marginBottom: '0.5rem'
    },
    company: {
      color: '#e2e8f0',
      marginBottom: '0.5rem'
    },
    jobDuration: {
      color: '#cbd5e1',
      fontSize: '0.875rem'
    },
    list: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start'
    },
    checkIcon: {
      width: '1.25rem',
      height: '1.25rem',
      color: '#f472b6',
      marginRight: '0.5rem',
      marginTop: '0.25rem'
    },
    listText: {
      color: '#e2e8f0'
    },
    skillsCard: {
      marginBottom: '2rem',
      backgroundColor: 'rgba(31, 41, 55, 0.7)',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      borderLeft: '4px solid #ec4899',
      backdropFilter: 'blur(10px)'
    },
    skillCategory: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#f472b6',
      marginBottom: '1rem'
    },
    skillsGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.25rem'
    },
    skillName: {
      color: '#e2e8f0',
      fontWeight: '500'
    },
    skillLevel: {
      color: '#f472b6',
      fontWeight: '500'
    },
    progressBg: {
      width: '100%',
      height: '0.625rem',
      backgroundColor: '#374151',
      borderRadius: '9999px',
      overflow: 'hidden'
    },
    progressBar: {
      height: '0.625rem',
      background: 'linear-gradient(to right, #ec4899, #9333ea)',
      borderRadius: '9999px',
      transition: 'width 1.5s ease-out'
    }
  };

  // Mock skills data
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "MongoDB", level: 60 }
      ]
    }
  ];

  // Media query for responsive design
  if (window.matchMedia('(min-width: 768px)').matches) {
    styles.contentContainer = {
      ...styles.contentContainer,
      flexDirection: 'row'
    };
    styles.column = {
      ...styles.column,
      width: '50%'
    };
  }

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <span style={styles.accentText}>About</span>
          <h2 style={styles.heading}>About Me</h2>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>
            I'm a passionate frontend developer currently pursuing my Bachelor's degree in IT at Mount Kenya University.
          </p>
          <div style={styles.decorCircle1}></div>
          <div style={styles.decorCircle2}></div>
        </div>
        
        <div style={styles.contentContainer}>
          <div style={styles.column}>
            <h3 style={styles.sectionTitle}>
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
              Education
            </h3>
            <div style={styles.card}>
              <h4 style={styles.schoolName}>Mount Kenya University</h4>
              <p style={styles.degree}>Bachelor of Information Technology</p>
              <p style={styles.year}>2023 - Present</p>
            </div>
            
            <h3 style={{...styles.sectionTitle, marginTop: '2rem'}}>
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Experience
            </h3>
            <div style={styles.experienceCard}>
              <h4 style={styles.jobTitle}>Frontend Developer</h4>
              <p style={styles.company}>Freelance</p>
              <p style={styles.jobDuration}>2023 - Present</p>
              <ul style={styles.list}>
                {['Developed responsive websites using React and JavaScript', 
                  'Implemented UI designs with Tailwind CSS', 
                  'Collaborated with clients to deliver customized solutions'].map((item, index) => (
                  <li key={index} style={styles.listItem}>
                    <svg style={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span style={styles.listText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div style={styles.column}>
            <h3 style={styles.sectionTitle}>
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Skills
            </h3>
            {skills.map((skillCategory, index) => (
              <div key={index} style={styles.skillsCard}>
                <h4 style={styles.skillCategory}>{skillCategory.category}</h4>
                <div style={styles.skillsGroup}>
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div style={styles.skillHeader}>
                        <span style={styles.skillName}>{skill.name}</span>
                        <span style={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div style={styles.progressBg}>
                        <div 
                          style={{
                            ...styles.progressBar,
                            width: `${skill.level}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;