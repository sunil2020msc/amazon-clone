import "./App.css";
import { useEffect } from "react";
import Home from "./components/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Checkout from "./components/Checkout";
import Login from "./components/Login"

import { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";
const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "checkout",
      element: <Checkout />
    },
  ]
},
{
  path: "/login",
  element: <Login />
}


])

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>>", authUser)

      if (authUser) {
        //user logged in
        dispatch({ type: "SET_USER", user: authUser })
      }
      else {
        //user logged logged out
        dispatch({ type: "SET_USER", user: null })
      }

    }, [])

  }, [])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
