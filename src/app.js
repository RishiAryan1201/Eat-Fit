// created a server
// HMR - hot module replacement
// file watcher algorithm - C++
// BUNDLING
// MINIFY
// Cleaning our Code
// dev and production build
// super fast build algorithm
// image optimization
// caching while development
// compression
// compatble with older version of browser
// HTTPS on dev
// consisitent hashing algorithm
// zero configuration
// transiitve dependencies
// tree shaking - removing unwanted code
// 
// 


// const heading2 = React.createElement("h2", {
//     id: "title",
//     key: "h2",
// }, "heading 2");
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
const Instamart = lazy(()=> import("./components/Instamart"));
/**
 * Header
 *   - logo
 *   - Nav Item
 *   - cart
 * Boay
 *  - search bar
 *  - restraunt list
 *     - restaurant catalog
 *     - restaurant card
 *       - image
 *       - name
 *       - rating
 *       - cusines
 * Footer
 *    - links
 *    - copyrights
 */
// react component
// functional - NEW - Iwill use this most of the Time
// name of component should start with capital letter

//chunking
//bundling

//upon on demand - upon rendering - it suspends rendering
const AppLayout = () => {
    const[user,setuser]=useState({
        name: "Rishi Aryan",
        email: "support@eatfit.com",
    });
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: (<Body />
                ),
            },
            {
                path: "/about",
                element: <About />,
                // children: [{
                //     path: "profile", //parentpath/{path} => localhos:1234/about/profile
                //     element: <ProfileClass />,
                //     },
                // ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: (
                <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>
                ),
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);