import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import { MachineProvider } from './hooks/useMachine';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MachineProvider>
            <App />
        </MachineProvider>
    </React.StrictMode>
);
