import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { ThemeProvider } from './providers/ThemeProvider';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
