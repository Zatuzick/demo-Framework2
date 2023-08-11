import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './pages'
import Add from './pages/add'
import Update from './pages/update'


const router = createBrowserRouter([
  {
    path: '/', element: <Index />
  },
  {
    path: '/add', element: <Add />
  },
  {
    path: '/update/:id', element: <Update />
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
