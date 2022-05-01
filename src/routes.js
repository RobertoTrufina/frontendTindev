import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';


export default function ProjectRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Login /> } />
                <Route path="/dev/:id" element={ <Main /> } />
            </Routes>
        </BrowserRouter>           
    );
}
