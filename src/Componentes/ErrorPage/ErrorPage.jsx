import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps!!!</h2>
            <button className="btn"> <Link to="/">Go Back Home</Link></button>
        </div>
    );
};

export default ErrorPage;