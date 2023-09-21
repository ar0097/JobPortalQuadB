import React, { useState } from "react";
import './App.css';
import { LoginPage } from "./LoginPage"; 
import { RegisterPage } from "./RegisterPage"; 
import Homepage from "./Homepage"; 
import JobDetailsPage from "./JobDetailsPage"; 
import ApplicationFormPage from "./ApplicationFormPage"; 
import Successpage from "./Successpage";

import { Route, Routes, Navigate } from "react-router-dom"; 

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            <p>{false && {currentForm}}</p>
            <Routes>
                <Route path="/login" element={<LoginPage onFormSwitch={toggleForm} />} />
                <Route path="/register" element={<RegisterPage onFormSwitch={toggleForm} />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/job/:id" element={<JobDetailsPage />} />
                <Route path="/apply" element={<ApplicationFormPage />} /> 
                <Route path="/success" element={<Successpage />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default App;
