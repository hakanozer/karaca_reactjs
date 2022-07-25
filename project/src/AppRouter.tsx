import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


// import components
import Login from './Login'
import Dashboard from './Dashboard'
import Detail from './Detail'
import Profile from './Profile'
import Security from './Security'

const router =
<BrowserRouter>
    <ToastContainer/>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={ <Security component={<Dashboard/>} /> } />
        <Route path='/detail/:id' element={ <Security component={<Detail/>} /> } />
        <Route path='/profile' element={ <Security component={<Profile/>} /> } />
        <Route path='*' element={ <Navigate to='/' /> }></Route>
    </Routes>
</BrowserRouter>

export default router