import React from "react";
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;