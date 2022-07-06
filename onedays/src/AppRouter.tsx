import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// import components
import Login from './Login'
import Dashboard from './Dashboard'
import Detail from './Detail'

const router =
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='*' element={ <Navigate to='/' /> }></Route>
    </Routes>
</BrowserRouter>

export default router