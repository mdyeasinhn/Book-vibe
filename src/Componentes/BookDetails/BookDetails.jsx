import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookApplication } from "../Utility/LocalStoreages";

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    // console.log(book);
    const handleReadList = () => {
        saveBookApplication(idInt);
        toast("Books Added to Read List");

    }
    const handleWishList = () => {
        toast("Books Added to WishList");
    }
    return (
        <div className="flex mt-11 pb-10 mb-10">
            <div className="w-1/2">
                <img className="w-[425px] h-[500px]" src={book.image} alt="" />
            </div>
            <div className="w-1/2">
                <h2 className="text-4xl font-bold">{book.bookName}</h2>
                <p className="mt-4 font-medium text-xl">By : {book.author}</p>
                <hr className="mt-4" /> <hr />
                <p className="mt-4 font-medium">{book.category}</p>
                <hr className="mt-4" />
                <p className="mt-5 "><span className="font-bold ">Review :</span><span className="pl-1">{book.review}</span></p>
                <div >

                    <ul className="flex gap-5 text-green-400 font-medium mt-4">
                        <h3 className="text-black font-bold">Tags :</h3>

                        <li className="bg-[#F3F3F3] w-[125px] h-[33px] rounded-lg text-center flex items-center justify-center ">#{book.tags[0]}</li>
                        <li className="bg-[#F3F3F3] w-[135px] h-[33px] rounded-lg text-center flex items-center justify-center">#{book.tags[1]}</li>
                    </ul>
                    <hr className="mt-6" />
                    <div className="flex gap-16 mt-5">
                        <div className="space-y-4 text-[#131313B2]">
                            <h1>Number of Pages:</h1>
                            <h2>Publisher:</h2>
                            <h2>Year of Publishing:</h2>
                            <h2>Rating:</h2>

                        </div>
                        <div className="space-y-4 font-medium">
                            <h2>{book.totalPages}</h2>

                            <h2>{book.publisher}</h2>
                            <h2>{book.yearOfPublishing}</h2>
                            <h2>{book.rating}</h2>

                        </div>

                    </div>
                    <div className="flex mt-4 gap-4 ">
                    <button onClick={handleReadList} className="btn ">Read</button>
                        {/* <Link to={`/books/${bookId}`}><button onClick={handleReadList} className="btn ">Read</button></Link> */}
                        <ToastContainer />
                        <button onClick={handleWishList} className="btn bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;