// This file is the entry point for our app; where we import App component
import React from 'react'; // import React library (this is an installed dependency in our package.json file)
import ReactDOM from 'react-dom/client'; // import ReactDOM library (same as above)
import App from './App'; // import App component

// side-effect import; tells the bundler Webpack to add the referenced CSS file to the final CSS bundle
import './assets/css/index.css';

// root will be the DOM element with id='root' within which our App component will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);