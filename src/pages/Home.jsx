import React from 'react';

const Home = () => {
  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(to bottom right, #4B0082, #1E3A8A, #1E40AF)',
      color: 'white',
      padding: '3rem 0'
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    contentColumn: {
      width: '100%',
      marginBottom: '2rem'
    },
    imageColumn: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    headingWrapper: {
      position: 'relative'
    },
    decorativeCircle: {
      position: 'absolute',
      left: '-1.5rem',
      top: '-1.5rem',
      width: '6rem',
      height: '6rem',
      backgroundColor: '#ec4899',
      borderRadius: '50%',
      opacity: '0.3',
      filter: 'blur(12px)',
      animation: 'pulse 2s infinite'
    },
    heading: {
      position: 'relative',
      fontSize: '3.25rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '1rem'
    },
    coloredSpan: {
      background: 'linear-gradient(to right, #f472b6, #fde047)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subheading: {
      fontSize: '1.5rem',
      color: '#e2e8f0',
      marginBottom: '1.5rem',
      fontWeight: '600'
    },
    inlineBlock: {
      display: 'inline-block'
    },
    accent: {
      display: 'inline-block',
      margin: '0 0.5rem',
      color: '#f472b6'
    },
    description: {
      color: '#cbd5e1',
      marginBottom: '2rem',
      maxWidth: '32rem',
      lineHeight: '1.75',
      fontSize: '1.125rem'
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    primaryButton: {
      background: 'linear-gradient(to right, #ec4899, #9333ea)',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.3)',
      cursor: 'pointer'
    },
    secondaryButton: {
      border: '2px solid #f472b6',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
    },
    imageContainer: {
      position: 'relative'
    },
    bgGradient: {
      position: 'absolute',
      zIndex: '-1',
      width: '16rem',
      height: '16rem',
      background: 'linear-gradient(to bottom right, #ec4899, #9333ea)',
      borderRadius: '50%',
      top: '1.5rem',
      left: '1.5rem',
      filter: 'blur(12px)',
      opacity: '0.7'
    },
    profileImage: {
      width: '16rem',
      height: '16rem',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid white',
      boxShadow: '0 20px 25px -5px rgba(79, 70, 229, 0.5)'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    yellowCircle: {
      position: 'absolute',
      width: '4rem',
      height: '4rem',
      backgroundColor: '#facc15',
      borderRadius: '50%',
      top: '-1.5rem',
      right: '-0.5rem',
      opacity: '0.7',
      filter: 'blur(8px)'
    },
    cyanCircle: {
      position: 'absolute',
      width: '2rem',
      height: '2rem',
      backgroundColor: '#22d3ee',
      borderRadius: '50%',
      bottom: '3rem',
      right: '-1rem',
      opacity: '0.7',
      filter: 'blur(8px)',
      animation: 'pulse 2s infinite'
    },
    '@keyframes pulse': {
      '0%, 100%': {
        opacity: '0.7',
        transform: 'scale(1)'
      },
      '50%': {
        opacity: '0.5',
        transform: 'scale(1.05)'
      }
    }
  };

  // Media query for responsive design
  if (window.matchMedia('(min-width: 768px)').matches) {
    styles.flexContainer = {
      ...styles.flexContainer,
      flexDirection: 'row'
    };
    styles.contentColumn = {
      ...styles.contentColumn,
      width: '50%',
      marginBottom: '0'
    };
    styles.imageColumn = {
      ...styles.imageColumn,
      width: '50%'
    };
    styles.heading = {
      ...styles.heading,
      fontSize: '4.5rem'
    };
    styles.subheading = {
      ...styles.subheading,
      fontSize: '1.875rem'
    };
    styles.buttonsContainer = {
      ...styles.buttonsContainer,
      flexDirection: 'row',
      gap: '1rem'
    };
    styles.profileImage = {
      ...styles.profileImage,
      width: '20rem',
      height: '20rem'
    };
    styles.bgGradient = {
      ...styles.bgGradient,
      width: '20rem',
      height: '20rem'
    };
  }

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          <div style={styles.contentColumn}>
            <div style={styles.headingWrapper}>
              <div style={styles.decorativeCircle}></div>
              <h1 style={styles.heading}>
                Hi, I'm <span style={styles.coloredSpan}>Mohamed</span>
              </h1>
            </div>
            <h2 style={styles.subheading}>
              <span style={styles.inlineBlock}>Frontend Developer</span> 
              <span style={styles.accent}>&</span> 
              <span style={styles.inlineBlock}>IT Student</span>
            </h2>
            <p style={styles.description}>
              I'm pursuing my Bachelor's degree in IT at Mount Kenya University. 
              I specialize in building modern web applications with React and JavaScript.
              Currently expanding my skills to become a Full Stack Developer.
            </p>
            <div style={styles.buttonsContainer}>
              <a 
                href="#projects" 
                style={styles.primaryButton}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1.05)';
                  e.target.style.background = 'linear-gradient(to right, #db2777, #7e22ce)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'none';
                  e.target.style.background = 'linear-gradient(to right, #ec4899, #9333ea)';
                }}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                style={styles.secondaryButton}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1.05)';
                  e.target.style.backgroundColor = '#f472b6';
                  e.target.style.color = '#312e81';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'none';
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div style={styles.imageColumn}>
            <div style={styles.imageContainer}>
              <div style={styles.bgGradient}></div>
              <div style={styles.profileImage}>
                <img 
                  src="src/assets/images/mh2.png" 
                  alt="Mohamed" 
                  style={styles.image}
                />
              </div>
              {/* Decorative Elements */}
              <div style={styles.yellowCircle}></div>
              <div style={styles.cyanCircle}></div>
            </div>
          </div>
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

export default Home;