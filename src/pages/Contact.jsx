import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

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
    contactCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.7)',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column'
    },
    contactInfo: {
      padding: '2rem',
      background: 'linear-gradient(to bottom right, #9333ea, #4B0082)'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem',
      color: 'white'
    },
    infoIcon: {
      width: '2rem',
      height: '2rem',
      marginRight: '1rem',
      color: '#f472b6'
    },
    formContainer: {
      padding: '2rem'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#e2e8f0',
      fontWeight: '500'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      color: 'white',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      color: 'white',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'all 0.3s ease'
    },
    submitButton: {
      background: 'linear-gradient(to right, #ec4899, #9333ea)',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.3)'
    },
    errorText: {
      color: '#f472b6',
      fontSize: '0.875rem',
      marginTop: '0.25rem'
    },
    successMessage: {
      textAlign: 'center',
      padding: '2rem'
    },
    successIcon: {
      width: '4rem',
      height: '4rem',
      color: '#10b981',
      margin: '0 auto 1rem'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      backgroundColor: 'rgba(236, 72, 153, 0.2)',
      color: '#f472b6',
      transition: 'all 0.3s ease'
    }
  };

  // Responsive styles
  if (window.matchMedia('(min-width: 768px)').matches) {
    styles.contactCard = {
      ...styles.contactCard,
      flexDirection: 'row'
    };
    styles.contactInfo = {
      ...styles.contactInfo,
      width: '40%'
    };
    styles.formContainer = {
      ...styles.formContainer,
      width: '60%'
    };
  }

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <span style={styles.accentText}>Contact</span>
          <h2 style={styles.heading}>Get In Touch</h2>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
          <div style={styles.decorCircle1}></div>
          <div style={styles.decorCircle2}></div>
        </div>
        
        <div style={styles.contactCard}>
          <div style={styles.contactInfo}>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '2rem' }}>Contact Information</h3>
            
            <div style={styles.infoItem}>
              <svg style={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>moharizein09318@gmail.com</span>
            </div>
            
            <div style={styles.infoItem}>
              <svg style={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+254 725803061</span>
            </div>
            
            <div style={styles.infoItem}>
              <svg style={styles.infoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Nairobi, Kenya</span>
            </div>
            
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Follow Me</h3>
              <div style={styles.socialLinks}>
                <a href="https://github.com/mohamedNoorA" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/mohamed-adan-aa692835a" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/Moha_Ada_n" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div style={styles.formContainer}>
            {submitSuccess ? (
              <div style={styles.successMessage}>
                <svg style={styles.successIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: '#e2e8f0' }}>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      ...styles.input,
                      borderColor: errors.name ? '#f472b6' : 'rgba(255, 255, 255, 0.2)'
                    }}
                    placeholder="Your Name"
                  />
                  {errors.name && <p style={styles.errorText}>{errors.name}</p>}
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      ...styles.input,
                      borderColor: errors.email ? '#f472b6' : 'rgba(255, 255, 255, 0.2)'
                    }}
                    placeholder="Your Email"
                  />
                  {errors.email && <p style={styles.errorText}>{errors.email}</p>}
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      ...styles.textarea,
                      borderColor: errors.message ? '#f472b6' : 'rgba(255, 255, 255, 0.2)'
                    }}
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && <p style={styles.errorText}>{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...styles.submitButton,
                    opacity: isSubmitting ? '0.8' : '1'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 15px 20px -3px rgba(236, 72, 153, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'none';
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(236, 72, 153, 0.3)';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg style={{ display: 'inline', width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', animation: 'spin 1s linear infinite' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle style={{ opacity: '0.25' }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path style={{ opacity: '0.75' }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;