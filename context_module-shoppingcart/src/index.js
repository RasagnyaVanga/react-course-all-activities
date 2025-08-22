import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CartProvider from './CartProvider';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider >
      <App/>
      </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
