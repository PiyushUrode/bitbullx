import React, { useState, useEffect } from 'react';
import './Pop.css';
import Popupimg from "../../assets/images/popup.webp" 

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup when the component mounts (page loads)
    setIsOpen(true);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src={Popupimg} alt="Popup" className="popup-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
