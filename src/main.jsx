import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import Team from './components/team/Team'
import Contact from './components/contact_us/Contact'
import Carma from './components/carma/Carma'
import Ecell from './components/ecell/Ecell'
import CarmaRead from './components/carma/CarmaRead'
// import App from './App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "team",
                element: <Team/>
            },
            {
                path:"contact",
                element: <Contact/>
            },
            {
                path: "carma",
                element: <Carma/>
            },
            {
                path: "ecell",
                element: <Ecell/>
            },
            {
                path: "carma/read/:id",
                element: <CarmaRead/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </React.StrictMode>,
)
