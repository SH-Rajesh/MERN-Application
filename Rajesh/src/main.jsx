import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './redux/store';  // Removed the .js extension, it's optional and often omitted
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <StrictMode>  {/* Wrap the app in StrictMode for highlighting potential issues */}
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
