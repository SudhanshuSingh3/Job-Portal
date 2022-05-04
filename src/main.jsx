import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobportal from './jobportal'
import UserDetails from './UserDetails'
import SelectedUsers from './SelectedUsers'
import RejectedUsers from './RejectedUsers'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Jobportal />} />
      <Route path="/details/:id" element={<UserDetails />} />
      <Route path="/selected" element={<SelectedUsers />} />
      <Route path="/rejected" element={<RejectedUsers />} />
    </Routes>
  </BrowserRouter>
)
