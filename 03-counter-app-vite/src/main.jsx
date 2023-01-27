import React from 'react';
import ReactDom from 'react-dom/client'
import { VaneApp } from './VaneApp';



ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <VaneApp/>
    </React.StrictMode>
)