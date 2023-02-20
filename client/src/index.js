import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import './assets/login.css';
import './assets/AdminDashboard.css';

axios.interceptors.request.use((request) => {
    if (request.url.includes('/login') || request.url.includes('/registration') || request.url.includes('/')) {
        return request;
    }

    if (localStorage.getItem('token')) {
        request.headers.Authorization = `Bearer ${localStorage.getItem(
            'token'
        )}`;
        return request;
    }

    return request;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);