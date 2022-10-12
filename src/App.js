import './App.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './Components/Home/Home';
import Question from './Components/Questions/Questions';
import Blog from './Components/Blog/Blog';
import Statictis from './Components/Statictics/Statictis';
import ErrorPage from './Components/404page/ErrorPage';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>,
        },
        {
          path: '/quiz/:quizId',
          loader: ({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Question></Question>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/statistics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statictis></Statictis>
        },
        {
          path:'*',
          element: <ErrorPage></ErrorPage>,
        }
      ]
    }
  ])
    
  return (
    <div className="App">
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
