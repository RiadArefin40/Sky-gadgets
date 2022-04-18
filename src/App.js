
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';
import VipService from './Pages/VipService/VipService';

function App() {
  return (
    <div >
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/about' element={<About></About>}> </Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/blog' element={<Blog></Blog>}></Route>
         <Route path='/service/:serviceId' element={
           <RequireAuth>
              <ServiceDetails></ServiceDetails>
           </RequireAuth>
             
         
         
         }> </Route>
         <Route path='*' element={<Notfound></Notfound>}></Route>
         <Route path='/vip' element={<VipService></VipService>}></Route>
       </Routes>

        <Footer></Footer>
  
    </div>
  );
}

export default App;
