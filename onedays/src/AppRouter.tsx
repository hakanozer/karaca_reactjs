import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'

// import components
import Login from './Login'

const router =
<BrowserRouter>
    <Routes>
        <Route path='' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
</BrowserRouter>

export default router