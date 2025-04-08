import { ThemeProvider } from "./contexts/theme-context.jsx";
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider storageKey="theme">
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

