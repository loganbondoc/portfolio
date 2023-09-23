import React from 'react';

function Popup({ onClose, title, description, image }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="popup-span">
          <h2>{title}</h2>
          <p>{description}</p>
        </span>
        <span className="popup-span">
          <img src={image} alt={title} />
        </span>
      </div>
      <button className="close-popup"onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></button>
    </div>
  );
}

export default Popup;
