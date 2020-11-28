import React from 'react'
import './App.css'
import MainBlock from './components/MainBlock/MainBlock'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainBlock/>
            </BrowserRouter>
        </div>
    );
}

export default App;
