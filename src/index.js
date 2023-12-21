import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const $ = element => document.querySelector(element);

const root = ReactDOM.createRoot($('#root'));

root.render(<App />);