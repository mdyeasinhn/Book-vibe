import {  useState } from "react";
import { Link, Outlet } from "react-router-dom";



const ListedBookds = () => {
   
        const [tabIndex, setTabIndex] = useState(0);
   
    return (
        <div>
            <div className="bg-[#1313130D] h-[100px] rounded-xl"><h2 className="text-center pt-8 font-bold text-3xl ">Books</h2></div>
            <div className="text-center my-8">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-500 ">Books</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      
                    </ul>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lifted mt-8">
                <Link to='' onClick={() => setTabIndex(0)} role="tab"
                    className={`${tabIndex === 0 ? 'tab tab-active' : 'tab'}`}> Read Books</Link>
  

                <Link to={`wishlists`} onClick={() => setTabIndex(1)} role="tab"
                    className={`${tabIndex === 1 ? 'tab tab-active' : 'tab'}`}>Wishlist Books</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBookds;