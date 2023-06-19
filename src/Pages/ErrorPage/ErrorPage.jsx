import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../assets/error/error.png'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex justify-center mt-40 lg:mt-0 font-bold text-center">
            <div>
                <img className=" w-6/12 mx-auto" src={errorImg} alt="" />
                <p className="text-xl mb-5">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'><button className="btn btn-outline btn-primary">Back TO Home</button></Link>
            </div>
        </div>
    );
}