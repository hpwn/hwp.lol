import React from "react";

function VideoComponent() {
  const videoUrl =
    "https://www.youtube.com/embed/lg5WKsVnEA4?si=SYCMJ4ObIjNK0mCY";

  return (
    <div className="video-component" style={{ margin: "20px" }}>
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
  );
}

export default VideoComponent;
