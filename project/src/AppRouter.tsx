import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './useRedux/Store'


// import components
import Login from './Login'
import Dashboard from './Dashboard'
import Detail from './Detail'
import Profile from './Profile'
import Security from './Security'
import Note from './Note'
import { DataContext, objContext } from './AppContext'

const router =
<Provider store={store}>
    <DataContext.Provider value={objContext}>
        <BrowserRouter>
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={ <Security component={<Dashboard/>} /> } />
                <Route path='/detail/:id' element={ <Security component={<Detail/>} /> } />
                <Route path='/profile' element={ <Security component={<Profile/>} /> } />
                <Route path='/note' element={ <Security component={<Note/>} /> } />
                <Route path='*' element={ <Navigate to='/' /> }></Route>
            </Routes>
        </BrowserRouter>
    </DataContext.Provider>
</Provider>

export default router