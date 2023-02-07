import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function VideoPopup() {
  const { showVideo, setShowVideo } = usePopup();
  return (
    <>
      {showVideo ? (
        <div className="overlay-bg">
          <div className="relative video-popup">
            <div
              className="absolute top-[-42px] right-[-42px] cursor-pointer"
              onClick={() => setShowVideo(false)}
            >
              <img src="/icons/close-icon.png" alt="" />
            </div>
            <iframe
              width="956"
              height="538"
              src="https://www.youtube.com/embed/Po1hc0NLEro?rel=0&autoplay=1"
              title="Spectrum of the Seas Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen="true"
            ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
