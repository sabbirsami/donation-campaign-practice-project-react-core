import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <>
            <Outlet />
            <Toaster />
        </>
    );
};

export default Root;
