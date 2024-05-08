import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import GoogleLogin from "../Pages/GoogleLogin";
import Github from "../Pages/GithubLogin";
import { Helmet } from "react-helmet";

const Login = () => {

    const { signInUser } = UseAuth();


    const onSubmit = data => {
        // console.log(data)
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Now</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="md:mt-24">
                <div className="card shrink-0 w-full h-full max-w-sm mx-auto shadow-2xl bg-pink-100  p-4">
                    <h2 className="text-3xl text-center mt-6 mb-6 font-bold">Login Form</h2>

                    <Link to='/emailLogin'><button onClick={onSubmit} className="btn w-full hover:bg-pink-300 bg-pink-300 text-white ">Log in with Email</button></Link>

                    <GoogleLogin></GoogleLogin>
                    <Github></Github>
                    <p className="text-center mb-4 mt-6">Don't have an account! <Link to='/register' className="text-pink-600 font-bold">Register</Link></p>

                </div>
            </div>
        </div>





    );
};

export default Login;