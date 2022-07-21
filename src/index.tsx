import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { splitIntoWords } from './01';

const sentense = "hello my frend";
const result = splitIntoWords (sentense)

console.log (result[0] === "hello");
console.log (result[1] === "my");
console.log (result[2] === "frend");


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
