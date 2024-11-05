import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../MainlayOut/MainLayOut";
import Home from "../pages/Home";
import Statics from "../pages/Statics";
import DeshBoard from "../pages/DeshBoard";
import Dynamic from "../components/Dynamic";
import AllData from "../components/AllData";
import Deatiles from "../components/Deatiles";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/category.json'),
            children:[
              {
                path:'/',
                element:<AllData></AllData>,
                loader:()=>fetch('/allData.json')
              },
              {
                path:'/category/:category',
                element:<Dynamic></Dynamic>,
                loader:()=>fetch('/allData.json')
              }
            ]
        },
        
        {
            path:'/statics',
            element:<Statics></Statics>
        },
        {
            path:'/deshboard',
            element:<DeshBoard></DeshBoard>
        },
        {
            path:'/details/:id',
            element:<Deatiles></Deatiles>,
            loader:()=>fetch('/allData.json')
        },

      ]
    },
  ]);
  export default router