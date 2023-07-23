// core - react
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"


// components
import App from './App.jsx' // main app

// app routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
