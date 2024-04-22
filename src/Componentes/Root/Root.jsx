import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <p className="text-2xl font-bold underline">
                Hello world!
            </p>
        </div>
    );
};

export default Root;