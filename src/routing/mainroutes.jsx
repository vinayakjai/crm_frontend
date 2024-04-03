import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import Home from '../pages/home/home';
import DashBoard from '../pages/dashboard';
function MainRoutes(){

    return (
        <Router>
             <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<DashBoard />}/>
         </Routes>
        </Router>
    )
}

export default MainRoutes;