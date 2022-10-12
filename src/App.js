import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import Header from './Components/Header/Header';
import Main from './layouts/Main';
import Quiz from './Components/Quiz/Quiz';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {

          path: '/home',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        }
      ]
    },
    
  ])
  return (
    <div className="App">
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
