
import LandingPage from './Pages/LandingPage';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Explore from './Pages/Explore';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><LandingPage/></>
    },
    {
      path:"/LogIn",
      element:<Login/>
    },
    {
      path:"/Register",
      element:<Register/>
    },
    {
      path:"/Explore",
      element:<Explore/>
    },
    
    
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
export default App;
