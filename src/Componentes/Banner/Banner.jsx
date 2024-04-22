

const Banner = () => {
    return (
        <div className="container mx-auto h-[500px] flex bg-[#1313130D] rounded-xl mt-5">
            <div>
                <h2 className="text-6xl pt-32 pl-28 font-bold">Books to freshen up <br /> your bookshelf</h2>
                <div className="mt-14">
                <button className="btn text-white bg-green-500 ml-28 ">View The List</button>

                </div>
            </div>
            <div className="flex justify-center items-center pl-24">
                <img src="https://i.ibb.co/HHnfhbR/pngwing-1.png" alt="" />
            </div>
            
        </div>
    );
};

export default Banner;