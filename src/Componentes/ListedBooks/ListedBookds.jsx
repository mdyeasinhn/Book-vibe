import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../Utility/LocalStoreages";
import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBookds = () => {
    const books = useLoaderData();
    const [readBook, setReadBook] = useState([])
    console.log(books)
    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {
            const bookRead = books.filter(book => storedBookIds.includes(book.bookId));
            setReadBook(bookRead)

            //     const bookRead = [];
            //     for(const bookId of storedBookIds) {
            //         const book = book.find(book => book.bookId === bookId);

            //             if(book){
            //                 bookRead.push(book)
            //             }
            // }
            console.log(bookRead, storedBookIds, books)
        }
    }, [books]);
    return (
        <div>
            <div className="bg-[#1313130D] h-[100px] rounded-xl"><h2 className="text-center pt-8 font-bold text-3xl ">Books</h2></div>
            <div className="text-center my-8">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-500 ">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>

            {
                readBook.map(book => <div key={book.bookId}>
                    <div className="card card-side bg-base-100 shadow-xl my-5   ">
                        <div className="w-[230px] bg-[#1313130D]">
                        <figure><img className="w-[129px] h-[127px]" src={book.image} alt="Movie" /></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{book.bookName}</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ListedBookds;