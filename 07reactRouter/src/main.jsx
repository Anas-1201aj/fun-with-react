import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home} from './components'
import Layout from './components/Layout.jsx'
import {About} from './components'
import {Contact} from './components'
import  User  from './components/User/user.jsx'
import Github, { gitHubLoader } from './components/Github/github.jsx'




const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home />,
      },
      {
        path : 'about',
        element : <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:userId',
        element: <User />
      },
       {
        loader:gitHubLoader,
        path: 'github',
        element: <Github />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
