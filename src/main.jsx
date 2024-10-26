import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import MovieView from './features/movies/MovieView.jsx'
import MovieForm from './features/movies/MovieForm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/movies',
    element: <MovieView />
  },
  {
    path: '/movies/addMovie',
    element: <MovieForm />
  },
  {
    path: '/movies/addMovie/:id',
    element: <MovieForm />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
