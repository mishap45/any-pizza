import React from 'react'
import './App.css'
import MainBlock from './components/MainBlock/MainBlock'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store/Redux'

function App() {
    return (
        <div className="App">
            <Provider store={Store}>
                <HashRouter basename={process.env.PUBLIC_URL}>
                    <MainBlock/>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
