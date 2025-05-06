import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const styles = {
    header: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      boxShadow: isScrolled ? '0 4px 15px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '0.5rem 0' : '0',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '70px',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#3b82f6',
      position: 'relative',
      textDecoration: 'none',
      letterSpacing: '0.5px',
    },
    desktopNav: {
      display: 'none',
      '@media (min-width: 768px)': {
        display: 'block',
      }
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '2rem',
    },
    navLink: {
      color: '#4b5563',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1.05rem',
      transition: 'color 0.3s ease',
      position: 'relative',
      padding: '0.3rem 0',
    },
    menuToggle: {
      width: '48px',
      height: '48px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1001,
      '@media (min-width: 768px)': {
        display: 'none',
      }
    },
    hamburger: {
      position: 'relative',
      width: '24px',
      height: '2px',
      backgroundColor: isMenuOpen ? 'transparent' : '#3b82f6',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: isMenuOpen ? 0 : '-100%',
      width: '75%',
      maxWidth: '300px',
      height: '100vh',
      background: 'linear-gradient(to bottom right, #1f2937, #111827)',
      zIndex: 1000,
      transition: 'right 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '5rem',
      boxShadow: '-5px 0 20px rgba(0, 0, 0, 0.2)',
    },
    mobileNavLinks: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    mobileNavLink: {
      color: 'white',
      textDecoration: 'none',
      display: 'block',
      padding: '1rem 2rem',
      fontSize: '1.25rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
    }
  };

  // Using internal stylesheet for pseudo-elements and media queries
  const internalStyles = `
    @media (min-width: 768px) {
      .desktop-nav {
        display: block !important;
      }
      
      .menu-toggle {
        display: none !important;
      }
      
      .mobile-menu {
        display: none !important;
      }
    }
    
    .logo::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      transition: width 0.3s ease;
    }
    
    .logo:hover::after {
      width: 100%;
    }
    
    .nav-link::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    .nav-link:hover {
      color: #3b82f6;
    }
    
    .nav-link:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }
    
    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: #3b82f6;
      transition: all 0.3s ease;
    }
    
    .hamburger::before {
      transform: ${isMenuOpen ? 'rotate(45deg)' : 'translateY(-8px)'};
    }
    
    .hamburger::after {
      transform: ${isMenuOpen ? 'rotate(-45deg)' : 'translateY(8px)'};
    }
    
    .mobile-nav-link:hover {
      background-color: rgba(59, 130, 246, 0.2);
      padding-left: 2.5rem;
      color: #3b82f6;
    }
  `;

  return (
    <>
      <style>{internalStyles}</style>
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.logo} className="logo">Mohamed</div>
            <nav style={styles.desktopNav} className="desktop-nav">
              <ul style={styles.navLinks}>
                <li><a href="#home" style={styles.navLink} className="nav-link">Home</a></li>
                <li><a href="#projects" style={styles.navLink} className="nav-link">Projects</a></li>
                <li><a href="#about" style={styles.navLink} className="nav-link">About</a></li>
                <li><a href="#contact" style={styles.navLink} className="nav-link">Contact</a></li>
              </ul>
            </nav>
            <button style={styles.menuToggle} className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              <span style={styles.hamburger} className="hamburger"></span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div style={styles.mobileMenu} className="mobile-menu">
          <ul style={styles.mobileNavLinks}>
            <li><a href="#home" onClick={toggleMenu} style={styles.mobileNavLink} className="mobile-nav-link">Home</a></li>
            <li><a href="#projects" onClick={toggleMenu} style={styles.mobileNavLink} className="mobile-nav-link">Projects</a></li>
            <li><a href="#about" onClick={toggleMenu} style={styles.mobileNavLink} className="mobile-nav-link">About</a></li>
            <li><a href="#contact" onClick={toggleMenu} style={styles.mobileNavLink} className="mobile-nav-link">Contact</a></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;