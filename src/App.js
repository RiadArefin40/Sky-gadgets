
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
       <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
         <Route path='/service/:serviceId' element={
           <RequireAuth>
              <ServiceDetails></ServiceDetails>
           </RequireAuth>
             
         
         
         }> </Route>
         <Route></Route>
       </Routes>

        <Footer></Footer>
  
    </div>
  );
}

export default App;