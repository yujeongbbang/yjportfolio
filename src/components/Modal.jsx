import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../css/Modal.css';

const Modal = ({ isOpen, content, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <button className="modal-close-btn" onClick={onClose}>x</button>
        </div>
        <div className="modal-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Modal;
