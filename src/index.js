import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";
import LoadingSpinner from "./components/LoadingSpinner";

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <React.Suspense fallback={<LoadingSpinner loading={true} />}>
                <App/>
            </React.Suspense>
        </React.StrictMode>
    </ThemeProvider>
);
