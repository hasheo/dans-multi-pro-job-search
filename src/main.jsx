import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from './layout/MainLayout'
import JobList from './pages/JobList'
import JobDetail from './pages/JobDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <JobList />
  },
  {
    path: "jobs/:jobId",
    element: <JobDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
