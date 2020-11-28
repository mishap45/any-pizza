import React from 'react'
import './App.css'
import MainBlock from './components/MainBlock/MainBlock'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store/Redux'

function App() {
    return (
        <div className="App">
            <Provider store={Store}>
                <BrowserRouter>
                    <MainBlock/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
