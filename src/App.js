
import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {lazy} from 'react';
import About from './pages/About.jsx'
import Admin from './pages/Admin.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './pages/Navbar'
import Login from './pages/Login.jsx';
const Home=lazy(()=>wait(1000).then(()=>import('./pages/Home')));
const router=createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[{
      path:'/',
      element:<Home/>
    },{
      path:'/About',
      element:<About/>
    },
    {
      path:'/Contact',
      element:<Contact/>
    },
    {
      path:'/Admin',
      element:<Admin/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]
  },
  
])
const App=()=> {
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}
function wait(timeout){
  return new Promise(resolve=>{
    setTimeout(resolve, timeout);
  })
}

export default App;
