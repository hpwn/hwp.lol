import React from "react";

function VideoComponent() {
  const videoUrl = "https://www.youtube.com/embed/3WAOxKOmR90?si=CwLLMeO3b1H93UO_&amp;controls=0?rel=0";

  return (
    <div className="video-component" style={{ margin: "20px" }}>
      {/* Adding CSS within the component */}
      <style>
        {`
          @media (max-width: 768px) { /* This is the breakpoint for mobile devices */
            .responsive-iframe-container {
              position: relative;
              overflow: hidden;
              width: 100%;
              padding-top: 56.25%; /* 16:9 Aspect Ratio */
            }
            .responsive-iframe-container iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 0;
            }
          }
        `}
      </style>
      <div className="responsive-iframe-container">
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="Introduction Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoComponent;
