import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = document.getElementById('root');

if (root) {
    const container = createRoot(root);
    container.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
