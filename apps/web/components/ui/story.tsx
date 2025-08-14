import React from "react";

export default function Story() {
  return (
    <div className="story-container">
      {/* Background Pattern */}
      <div className="story-background"></div>
      
      {/* Floating Elements */}
      <div className="story-floating-1"></div>
      <div className="story-floating-2"></div>
      
      <div className="story-content">
        <div className="story-inner">
          <div className="story-max-width">
            
            {/* Top Button */}
            <div className="story-button-container">
              <button className="story-button">
                <span>📖 Our Story</span>
                <div className="story-button-glow"></div>
              </button>
            </div>

            {/* Title and Subtitle */}
            <div className="story-header">
              <h2 className="story-title">
                <span className="story-title-line">About Artisan</span>
              </h2>
              <p className="story-subtitle">
                Artisan was born from a simple belief: that every skilled professional deserves 
                a platform to showcase their expertise, and every client deserves access to 
                quality, reliable services.
              </p>
            </div>

            {/* Main Content Sections */}
            <div className="story-sections">
              
              {/* Left Section - Image */}
              <div className="story-left-section">
                <div className="story-image-container">
                  <img 
                    src="/img1.png" 
                    alt="Artisan professionals shaking hands in workshop" 
                    className="story-image"
                  />
                </div>
              </div>

              {/* Right Section - Text Content */}
              <div className="story-right-section">
                <div className="story-text-container">
                  <h3 className="story-main-title">
                    <span className="story-title-line">Empowering artisans</span>
                    <span className="story-title-line">to achieve more</span>
                  </h3>
                  <p className="story-main-text">
                    At Artisan, we believe that connecting with skilled professionals should be 
                    seamless, intuitive, and effective. Founded with the mission to streamline 
                    service discovery and professional collaboration, our platform is designed 
                    to empower both clients and artisans to connect in meaningful ways.
                  </p>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 