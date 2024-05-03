import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar"
import HomePage from "../HomePage/HomePage"

function Router() {
  return (
    <div>
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default Router