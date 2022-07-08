import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './AppRouter';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( router );

