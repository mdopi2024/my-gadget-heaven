import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../MainlayOut/MainLayOut";
import Home from "../pages/Home";
import Statics from "../pages/Statics";
import DeshBoard from "../pages/DeshBoard";
import Dynamic from "../components/Dynamic";
import AllData from "../components/AllData";
import Deatiles from "../components/Deatiles";
import DeshBoardCard from "../components/DeshBoardCard";
import Wishlist from "../components/Wishlist";
import UpComing from "../pages/UpComing";
import ErrorPage from "../components/ErrorPage";





const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
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
            element:<DeshBoard></DeshBoard>,
            children:[
              {
                path:'',
                element:<DeshBoardCard></DeshBoardCard>
              },
              {
                path:'wishlist',
                element:<Wishlist></Wishlist>
              }
            ]
          
        },
        {
            path:'/details/:id',
            element:<Deatiles></Deatiles>,
            loader:()=>fetch('/allData.json')
        },
        {
            path:'upcoming',
            element:<UpComing></UpComing>,
            loader:()=>fetch('/upcomingData.json')
            
        },

      ]
    },
  ]);
  export default router