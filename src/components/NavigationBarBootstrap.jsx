import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-amay.png';
import { IoMdArrowDropdown } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavigationBarBootstrap = () => {
  const [marginTop, setMarginTop] = useState('30px');
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const collapseRef = useRef(null);

  // Collapse navbar on link click (for mobile)
  const handleNavLinkClick = () => {
    if (window.innerWidth < 992 && collapseRef.current) {
      const bsCollapse = window.bootstrap && window.bootstrap.Collapse
        ? window.bootstrap.Collapse
        : window.Collapse;
      if (bsCollapse) {
        new bsCollapse(collapseRef.current, { toggle: false }).hide();
      } else if (collapseRef.current.classList.contains('show')) {
        collapseRef.current.classList.remove('show');
      }
    }
    setMobileDropdownOpen(false); // Always close dropdown on navigation
  };

  // Toggle dropdown for mobile
  const handleDropdownToggle = (e) => {
    if (window.innerWidth < 992) {
      e.preventDefault();
      setMobileDropdownOpen((open) => !open);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setMarginTop('30px');
      } else {
        setMarginTop('0px');
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <style>{`
        .custom-navbar .logo-img {
          width: 3.2rem;
          height: 3.2rem;
          object-fit: cover;
          box-shadow: 0 0.13rem 0.5rem rgba(0, 0, 0, 0.07);
        }

        .custom-navbar .brand-title {
          font-size: 1.3rem;
          letter-spacing: 0.5px;
          color: #1D2BAA;
        }

        .custom-navbar .tagline {
          font-size: 0.9rem;
          margin-top: -0.3rem;
        }

        .custom-navbar .nav-link {
          font-weight: 500;
          color:rgba(0, 47, 45, 0.978) !important;
          position: relative;
          font-size: 1.15rem;
          transition: color 0.2s;
        }

        .custom-navbar .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #39b54a;
          left: 0;
          bottom: 0;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: center;
        }

        .custom-navbar .nav-link:hover::after,
        .custom-navbar .nav-link.active::after {
          transform: scaleX(1);
        }

        .custom-navbar .nav-link:hover {
          color: #2e8c3a !important;
        }

        .custom-navbar .dropdown-menu {
          border-radius: 8px;
          border: 1px solid #f3e6e0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
          opacity: 0;
          transform: translateY(10px) scaleY(0.98);
          transition: opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1);
          display: block;
          pointer-events: none;
        }
        .custom-navbar .nav-item.dropdown.show .dropdown-menu {
          opacity: 1;
          transform: translateY(0) scaleY(1);
          pointer-events: auto;
        }

        .custom-navbar .dropdown-item:hover {
          background: #eafbe7;
          color: #2e8c3a;
          font-weight: 600;
        }

        .donate-btn {
          background-color:rgb(18, 52, 222);
          color: white !important;
          border-radius: 1.75rem;
          font-weight: bold;
          font-size: 1rem;
          padding: 0.5rem 1.5rem;
          white-space: nowrap;
          transition: all 0.2s ease-in-out;
        }

        .donate-btn:hover {
          background-color:rgb(34, 19, 112);
          transform: scale(1.05);
          box-shadow: 0 0.25rem 1rem rgba(255, 102, 0, 0.18);
        }

        .dropdown-icon {
          transition: transform 0.3s ease;
        }

        .nav-dropdown-combo:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .custom-navbar .nav-item.dropdown:hover .dropdown-menu {
          opacity: 1;
          transform: translateY(0) scaleY(1);
          pointer-events: auto;
          display: block;
        }

        .custom-navbar .mobile-dropdown {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s;
        }
        .custom-navbar .mobile-dropdown.open {
          max-height: 400px;
          opacity: 1;
        }
        @media (min-width: 992px) {
          .custom-navbar .mobile-dropdown {
            display: none !important;
          }
        }
        .nav-dropdown-combo {
          position: relative;
        }
        .nav-dropdown-combo .nav-link {
          border: none;
          background: none;
          box-shadow: none;
        }
        .nav-dropdown-combo .dropdown-toggle {
          border: none;
          background: none;
          box-shadow: none;
        }
        /* Hide Bootstrap's default caret for custom dropdowns */
        .nav-dropdown-combo .dropdown-toggle::after {
          display: none !important;
        }
        .nav-dropdown-combo::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: #39b54a;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: center;
        }
        .nav-dropdown-combo:hover::after,
        .nav-dropdown-combo:focus-within::after,
        .nav-dropdown-combo .nav-link.active ~ .dropdown-toggle::after {
          transform: scaleX(1);
        }
        .nav-dropdown-combo:hover .nav-link,
        .nav-dropdown-combo:focus-within .nav-link,
        .nav-dropdown-combo .nav-link.active {
          
        }
        .nav-dropdown-combo .dropdown-toggle {
          color: green !important;
        }
        .nav-dropdown-combo:hover .dropdown-toggle,
        .nav-dropdown-combo:focus-within .dropdown-toggle {
          color: green !important;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top custom-navbar" style={{ zIndex: 1090, marginTop }}>
        <div className="container-fluid px-4">
          <Link 
            className="navbar-brand d-flex align-items-start gap-2" 
            to="/" 
            onClick={handleNavLinkClick}
          >
            <img src={logo} alt="Logo" className="rounded logo-img" />
            <div className="d-flex flex-column align-items-start">
              <span className="fw-bold brand-title" style={{color:' #1D2BAA'}}>AMAY FOUNDATION</span>
              <small className="text-success fst-italic tagline">शुद्धचित्तेन सेवा यत्र, तत्र कल्याणम्</small>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar" style={{}} ref={collapseRef}>
            <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>About Us</NavLink>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-dropdown-combo d-flex align-items-center position-relative">
                  <NavLink
                    className="nav-link d-flex align-items-center gap-1"
                    to="/programs"
                    onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                            setMobileDropdownOpen(!mobileDropdownOpen);
                      } else {
                        handleNavLinkClick();
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                      }
                    }}
                    style={{ cursor: 'pointer', border: 'none', background: 'none', boxShadow: 'none' }}
                  >
                    What We Do
                  </NavLink>
                  <span
                    className="dropdown-toggle d-flex align-items-center gap-1 "
                    role="button"
                    data-bs-toggle="dropdown"
                    onClick={handleDropdownToggle}
                    aria-expanded={mobileDropdownOpen}
                    style={{ cursor: 'pointer', marginLeft: '-0.3rem', fontSize: '1.2em', background: 'none', border: 'none', boxShadow: 'none' }}
                  >
                    <IoMdArrowDropdown 
                      className="dropdown-icon" 
                      style={{
                        color:' #39b54a',
                        transform: mobileDropdownOpen ? 'rotate(180deg)' : undefined,
                        transition: 'transform 0.3s ease'
                      }} 
                    />
                  </span>
                </div>
                {/* Mobile dropdown (visible on small screens only) */}
                <ul className={`mobile-dropdown dropdown-menu${mobileDropdownOpen ? ' open' : ''} d-lg-none`}
                  style={{ 
                    position: 'static', 
                    boxShadow: 'none', 
                    border: 'none', 
                    background: 'transparent', 
                    paddingLeft: 0,
                    maxHeight: mobileDropdownOpen ? '400px' : '0',
                    opacity: mobileDropdownOpen ? '1' : '0',
                    transition: 'max-height 0.3s ease-in-out, opacity 0.2s ease-in-out'
                  }}>
                  <li><NavLink className="dropdown-item" to="/programs#capacity" onClick={handleNavLinkClick}>Capacity Building</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#carbon" onClick={handleNavLinkClick}>Carbon Footprint</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#livelihood" onClick={handleNavLinkClick}>Livelihood</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#cleanup" onClick={handleNavLinkClick}>Clean-Up Drives</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#treeplantation" onClick={handleNavLinkClick}>Tree Plantation</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#wastemanagement" onClick={handleNavLinkClick}>Waste Management</NavLink></li>
                </ul>
                {/* Desktop dropdown (visible on large screens only) */}
                <ul className="dropdown-menu d-none d-lg-block">
                  <li><NavLink className="dropdown-item" to="/programs#capacity" onClick={handleNavLinkClick}>Capacity Building</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#carbon" onClick={handleNavLinkClick}>Carbon Footprint</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#livelihood" onClick={handleNavLinkClick}>Livelihood</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#cleanup" onClick={handleNavLinkClick}>Clean-Up Drives</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#treeplantation" onClick={handleNavLinkClick}>Tree Plantation</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#wastemanagement" onClick={handleNavLinkClick}>Waste Management</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/future-plans" onClick={handleNavLinkClick}>Future Plans</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery" onClick={handleNavLinkClick}>Media Features</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/join-us" onClick={handleNavLinkClick}>Join Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/our-team" onClick={handleNavLinkClick}>Our Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact Us</NavLink>
              </li>
              <li className="nav-item d-lg-none mt-2">
                <Link to="/donatenow" className="btn donate-btn w-100" onClick={handleNavLinkClick}>Donate Now</Link>
              </li>
            </ul>
          </div>

          <Link to="/donatenow" className="btn donate-btn ms-lg-3 mt-2 mt-lg-0 d-none d-lg-block">Donate Now</Link>
        </div>
      </nav>
    </>
  );
};

export default NavigationBarBootstrap;
