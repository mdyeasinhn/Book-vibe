import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { bookId, image, bookName, author, review, totalPage, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
       < div>
       <Link to={`/book/${bookId}`}>
       <div className="w-[374px] border rounded-xl p-6 mt-6">
        

        <div className="bg-[#F3F3F3] rounded-xl h-[320px] flex justify-center items-center">
            <img className="w-[134px] h-[166px]  " src={image} alt="" />
        </div>
        <div>
            <ul className="flex gap-5 text-green-400 font-medium mt-4">
                <li className="bg-[#F3F3F3] w-[125px] h-[33px] rounded-lg text-center flex items-center justify-center">{tags[0]}</li>
                <li  className="bg-[#F3F3F3] w-[125px] h-[33px] rounded-lg text-center flex items-center justify-center">{tags[1]}</li>
            </ul>
        </div>
        <div className="mt-3">
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="mt-4 font-medium">By : {author}</p>
        </div>
        <hr className="border border-dashed mt-4" />
        <div className="flex justify-between mt-4">
            <p className="font-medium">{category}</p>
            <div className="flex gap-2 items-center ">
                <p className="font-medium">{rating}</p>
                <FaRegStar />
            </div>
        </div>

    </div> </Link>
       </div>

      
    );
};

export default Book;