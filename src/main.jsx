import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/templates/templates.css'
import './components/atoms/buttons/Buttons.css'
import './components/atoms/others/others.css'
import './components/atoms/formsParts/FormParts.css'
import './components/molecules/molecules.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)