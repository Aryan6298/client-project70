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
          color: #ff6600 !important;
          position: relative;
          font-size: 1.15rem;
          transition: color 0.2s;
        }

        .custom-navbar .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #ff6600;
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
          color: #d35400 !important;
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
          background: #fff7f2;
          color: #d35400;
          font-weight: 600;
        }

        .donate-btn {
          background-color: #ef301b;
          color: white !important;
          border-radius: 1.75rem;
          font-weight: bold;
          font-size: 1rem;
          padding: 0.5rem 1.5rem;
          white-space: nowrap;
          transition: all 0.2s ease-in-out;
        }

        .donate-btn:hover {
          background-color: #ff6600;
          transform: scale(1.05);
          box-shadow: 0 0.25rem 1rem rgba(255, 102, 0, 0.18);
        }

        .dropdown-icon {
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .nav-item.dropdown.show .dropdown-icon {
          transform: rotate(180deg) scale(1.2);
        }
        .custom-navbar .nav-item.dropdown:hover .dropdown-icon {
          transform: rotate(180deg) scale(1.2);
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
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top custom-navbar" style={{ zIndex: 1090, marginTop }}>
        <div className="container-fluid px-4">
          <Link className="navbar-brand d-flex align-items-start gap-2" to="/">
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
                <span
                  className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={handleDropdownToggle}
                  aria-expanded={mobileDropdownOpen}
                >
                  What We Do <IoMdArrowDropdown className="dropdown-icon" style={{transform: mobileDropdownOpen ? 'rotate(180deg)' : undefined, transition: 'transform 0.3s'}} />
                </span>
                {/* Mobile dropdown (visible on small screens only) */}
                <ul className={`mobile-dropdown dropdown-menu${mobileDropdownOpen ? ' open' : ''} d-lg-none`}
                  style={{ position: 'static', boxShadow: 'none', border: 'none', background: 'transparent', paddingLeft: 0 }}>
                  <li><NavLink className="dropdown-item" to="/programs#cleanup" onClick={handleNavLinkClick}>Clean-Up Drives</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#treeplantation" onClick={handleNavLinkClick}>Tree Plantation</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#wastemanagement" onClick={handleNavLinkClick}>Waste Management</NavLink></li>
                </ul>
                {/* Desktop dropdown (visible on large screens only) */}
                <ul className="dropdown-menu d-none d-lg-block">
                  <li><NavLink className="dropdown-item" to="/programs#cleanup" onClick={handleNavLinkClick}>Clean-Up Drives</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#treeplantation" onClick={handleNavLinkClick}>Tree Plantation</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/programs#wastemanagement" onClick={handleNavLinkClick}>Waste Management</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery" onClick={handleNavLinkClick}>Gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/become-volunteer" onClick={handleNavLinkClick}>Volunteer</NavLink>
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
