import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    return (
        <div>
            <h2 className="text-5xl font-semibold text-center mt-5"> Books</h2>
            <div className="grid lg:grid-cols-3 ">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }

            </div>
        </div>
    );
};

export default Books;