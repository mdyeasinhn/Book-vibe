import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    console.log(book);
    return (
        <div className="flex">
            <div className="w-1/2">
                <img className="w-[425px] h-[500px]" src={book.image} alt="" />
            </div>
            <div className="w-1/2">
                <h2 className="text-4xl font-bold">{book.bookName}</h2>
                <p>By : {book.author}</p>
                <p>{book.category}</p>

                <p><span>Review:</span>{book.review}</p>
                <div >

                    <ul className="flex gap-5 text-green-400 font-medium mt-4">
                    <h3 className="text-black font-semibold">Tags :</h3>

                        <li className="bg-[#F3F3F3] w-[125px] h-[33px] rounded-lg text-center flex items-center justify-center">#{book.tags[0]}</li>
                        <li className="bg-[#F3F3F3] w-[125px] h-[33px] rounded-lg text-center flex items-center justify-center">#{book.tags[1]}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;