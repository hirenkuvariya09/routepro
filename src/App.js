import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Dashbord from './pages/Dashbord';
import Login from './Components/Login';
import Register from './Components/register';
import Protek from './services/protek';
const App = () => {
  return (
    <>
    
<BrowserRouter>
<Routes>

  <Route path='/' element={<Login/>}/>

  <Route path='/register' element={<Register/>}/>  

  <Route path='/' element={<Protek/>}>
       <Route path='/dashbord' element={<Dashbord/>}/>
  </Route>

</Routes>
</BrowserRouter>
    </>
  )
}


export default App

