import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/producercontext';
import { FilterContextProvider } from './context/filtercontext';
import { CartProvider } from './context/cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
        <App />
        </CartProvider>
     
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
