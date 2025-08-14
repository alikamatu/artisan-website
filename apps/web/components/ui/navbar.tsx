"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="navbar-container">
      {/* Top line */}
      <div className="navbar-top-line"></div>
      
      {/* Main navbar container */}
      <nav className="navbar-main">
        <div className="navbar-content">
          {/* Navbar content with rounded border */}
          <div className="navbar-inner">
            <div className="navbar-flex">
              
              {/* Logo Section - Left Side */}
              <div className="navbar-logo">
                {/* Logo icon */}
                <div className="navbar-logo-icon">
                  <div className="navbar-logo-inner"></div>
                </div>
                {/* Logo text */}
                <span className="navbar-logo-text">
                  Artisan
                </span>
              </div>

              {/* Desktop Navigation Links - Center */}
              <div className="navbar-links md:flex">
                <Link 
                  href="/" 
                  className={`navbar-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className={`navbar-link ${isActive('/services') ? 'active' : ''}`}
                >
                  Services
                </Link>
                <Link 
                  href="/pricing" 
                  className={`navbar-link ${isActive('/pricing') ? 'active' : ''}`}
                >
                  Pricing
                </Link>
                <Link 
                  href="/developers" 
                  className={`navbar-link ${isActive('/developers') ? 'active' : ''}`}
                >
                  Developers
                </Link>
                <Link 
                  href="/about" 
                  className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
                >
                  About
                </Link>
              </div>

              {/* Right Section - Sign In Button and Mobile Menu */}
              <div className="flex items-center gap-16">
                {/* Desktop Sign In Button */}
                <Link 
                  href="/auth/login" 
                  className="navbar-signin-desktop"
                >
                  Sign in
                </Link>

                {/* Mobile Sign In Button */}
                <Link 
                  href="/auth/login" 
                  className="navbar-signin-mobile"
                >
                  Sign in
                </Link>
              </div>
            </div>

            {/* Mobile Menu - Removed since we're replacing hamburger with sign-in button */}
          </div>
        </div>
      </nav>
    </div>
  );
}

