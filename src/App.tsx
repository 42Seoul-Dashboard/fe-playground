import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<div className='App'>
			<Routes>
        <Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
			<CssBaseline />
		</div>
	);
}

export default App;

// Login page
// Dashboard page
//
// APP 에서, CssBaseline을 깔고
// Main Page 구성
// 헤더, 사이드바, 우하단 Speed Dial

//
