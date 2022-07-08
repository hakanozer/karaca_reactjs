import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// import components
import Login from './Login'

const router =
<BrowserRouter>
    <ToastContainer/>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={ <Navigate to='/' /> }></Route>
    </Routes>
</BrowserRouter>

export default router