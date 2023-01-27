import React from 'react';
import ReactDom from 'react-dom/client'
import { FirstApp } from './FirstApp';
import { VaneApp } from './VaneApp';



ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp></FirstApp>
    </React.StrictMode>
)