import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './CustomPopup.css'; // Make sure to create a CSS file for additional styling

const Popup = ({ rowIndex }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Popup
      trigger={
        <button 
          onClick={() => setIsPopupOpen(true)}
          className="open-popup-btn"
        >
          +
        </button>
      }
      position="right center"
      open={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
      closeOnDocumentClick
      modal
    >
      <div className="popup-wrapper">
        <div className="popup-header">
          <h2>Popup Form</h2>
          <button onClick={() => setIsPopupOpen(false)} className="close-btn">
            &times;
          </button>
        </div>
        <div className="popup-content">
          <form>
            <div className="form-group">
              <label htmlFor="text1">Text 1</label>
              <input type="text" id="text1" className="input-field" placeholder="Enter text 1" />
            </div>
            <div className="form-group">
              <label htmlFor="text2">Text 2</label>
              <input type="text" id="text2" className="input-field" placeholder="Enter text 2" />
            </div>
            <div className="form-group">
              <label htmlFor="text3">Text 3</label>
              <input type="text" id="text3" className="input-field" placeholder="Enter text 3" />
            </div>
            <div className="form-group">
              <label htmlFor="text4">Text 4</label>
              <input type="text" id="text4" className="input-field" placeholder="Enter text 4" />
            </div>
          </form>
        </div>
        <div className="popup-footer">
          <button onClick={() => setIsPopupOpen(false)} className="cancel-btn">
            Cancel
          </button>
          <button onClick={() => setIsPopupOpen(false)} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default Popup;
