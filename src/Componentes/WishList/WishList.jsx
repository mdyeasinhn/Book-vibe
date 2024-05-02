import { useEffect, useState } from "react";
import { getStoredBookApplication } from "../Utility/LocalStoreages";
import { IoIosContacts } from "react-icons/io";
import { useLoaderData } from "react-router-dom";


const WishList = () => {
    const books = useLoaderData();

    const [wishListBook, setWishListBook] = useState([]);
    console.log(books)
    useEffect(() => {
        const storedBookIds = getStoredBookApplication();
        if (books.length > 0) {
            const bookRead = books.filter(book => storedBookIds.includes(book.bookId));
            setWishListBook(bookRead)

       
            console.log(bookRead, storedBookIds, books)
        }
    }, [books]);
    return (
       <div>
        {
    wishListBook.map(book => <div key={book.bookId}>
             <div className="card card-side bg-base-100  m-5   border-2">
        <div className="w-[230px] bg-[#1313130D] rounded-lg p-10 m-8">
            <figure><img className="w-[129px] h-[127px]" src={book.image} alt="Movie" /></figure>
        </div>
        <div className="card-body">
            <div>
            <h2 className="card-title">{book.bookName}</h2>
            <p className="font-medium">By: {book.author}</p>
            </div>
            <div className="flex gap-3 ">
                <h2 className="font-bold mt-5">Tags:</h2>
                <ul className="flex gap-5 text-green-400 font-medium mt-4">
                    <li className="bg-[#F3F3F3] w-[125px] h-[33px] rounded-lg text-center flex items-center justify-center">#{book.tags[0]}</li>
                    <li className="bg-[#F3F3F3] w-[125px] h-[33px] rounded-lg text-center flex items-center justify-center">#{book.tags[1]}</li>
                </ul>
            </div>


            <div className="flex items-center gap-2">
                <div className="" >
                    <IoIosContacts />
                </div>
                <p className="text-[#13131399]">Publisher: {book.publisher}</p>
         



            </div>
           <hr className="border mt-2 mb-2 " />
           <div className="flex gap-2">
            <button className="btn rounded-3xl bg-blue-300 text-blue-600">Category: {book.category}</button>
            <button className="btn rounded-3xl bg-orange-300 text-orange-600">Rating: {book.rating}</button>
            <button className="btn rounded-3xl bg-green-500 text-white">View Details</button>
           </div>
            
        </div>
    </div>

        </div>)
       }
       </div>
    );

};

export default WishList;