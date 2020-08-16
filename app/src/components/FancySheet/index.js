import React from 'react';
import './style.css';

export default function fancySheet({ children }){
  return (
    <div id="fancy-border">
      <div id="fancy-content">
        { children }
      </div>
    </div>
  )
}