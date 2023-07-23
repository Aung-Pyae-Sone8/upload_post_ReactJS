import React from 'react';
import './index.css';
import ReactDom from 'react-dom';

export default function Modal({children,danger=false, setShowModal}) {
  let className =danger ? 'border-red' : 'border-blue';
  return (
    ReactDom.createPortal(
    <div className='modal-component'>
      <div className='modal-backdrop'>
        <div className={`modal ${className}`}>
          {children }
          <button onClick={()=>setShowModal(false)}>Close</button>
        </div>
      </div>
    </div>,document.getElementById('modal')
    ))
}
