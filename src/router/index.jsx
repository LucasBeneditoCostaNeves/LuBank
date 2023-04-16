import React from "react"
import { Route, Routes } from "react-router-dom"
import { PageProfile } from "../pages/profile/index.jsx"
import { HomePage } from "../pages/homepage/index.jsx"

export const RoutersPage = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="/dashboard" element={<PageProfile/>}/> 
        </Routes>
    )
}