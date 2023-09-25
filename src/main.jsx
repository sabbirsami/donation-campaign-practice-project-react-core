import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home";
import DonationDetails from "./Components/DonationDetails";
import AllDonation from "./Components/Donations/AllDonation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/donations/",
                element: <AllDonation />,
                loader: () => fetch("../data.json"),
            },
            {
                path: "/donation/:donationId",
                element: <DonationDetails />,
                loader: () => fetch("../data.json"),
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
