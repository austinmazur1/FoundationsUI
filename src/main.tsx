import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HoverCard from './components/HoverCard.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
  path: 'components/hover-card',
  element: <HoverCard /> 
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
