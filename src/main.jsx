import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Componentes/Root/Root';
import ErrorPage from './Componentes/ErrorPage/ErrorPage';
import Home from './Componentes/Home/Home';
import ListedBookds from './Componentes/ListedBooks/ListedBookds';
import BookDetails from './Componentes/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/books",
        element: <ListedBookds></ListedBookds>,
        loader: () => fetch("/books.json")

      },

      {
        path: "/page",
        element: <ListedBookds></ListedBookds>
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
