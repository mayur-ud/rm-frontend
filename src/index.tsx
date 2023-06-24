import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyProvider } from './Store/EvidenceStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MyProvider>
    <App/>
  </MyProvider>
);