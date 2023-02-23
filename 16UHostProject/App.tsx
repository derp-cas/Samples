import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomersPage } from './Pages/CustomersPage/CustomersPage';
import { MainPage } from './Pages/MainPage/MainPage';
import { Packages } from './Pages/Packages/Packages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='packages' element={<Packages />} />
                <Route path='customers' element={<CustomersPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
