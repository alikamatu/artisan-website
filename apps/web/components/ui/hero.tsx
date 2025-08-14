import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-container">
      {/* Background Pattern */}
      <div className="hero-background"></div>
      
      {/* Floating Elements */}
      <div className="hero-floating-left"></div>
      
      <div className="hero-floating-right"></div>
      
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-max-width">
            {/* Info Button */}
            <div className="hero-info-button">
              <button className="hero-info-btn">
                <span>✨ What makes Artisan special</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Main Content */}
            <div className="hero-main">
              {/* Decorative Icons */}
              <div className="hero-decorative-left">
                <div className="hero-decorative-left-bg"></div>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Headline */}
              <div className="hero-headline">
                <h1 className="hero-title">
                  <span className="hero-title-gradient">
                    Connect with
                  </span>
                  <span className="hero-title-dark">skilled artisans</span>
                  <span className="hero-title-muted">for quality</span>
                  <span className="hero-title-gradient">
                    services
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="hero-description">
                Artisan is the premier marketplace connecting clients with verified, skilled professionals. 
                Find trusted artisans for any job, from home repairs to specialized services.
              </p>

              {/* Call to Action Buttons */}
              <div className="hero-cta-container">
                <Link 
                  href="/auth/signup" 
                  className="hero-cta-primary"
                >
                  Find an Artisan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
