import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import google from '../../../assets/logo/google.jpg'
import facebook from '../../../assets/logo/fb.png'
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../../firebase/firebase.config";


const SocialLogIn = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                const saveUser = { name: newUser.displayName, email: newUser.email }
                fetch('https://summer-camp-server-sandy-phi.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const loggedUserFacebook = result.user;
                console.log(loggedUserFacebook);
                const saveUser = { name: loggedUserFacebook.displayName, email: loggedUserFacebook.email }
                fetch('https://summer-camp-server-sandy-phi.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="mb-5">
            <div>
                <button onClick={handleGoogleLogin} className="flex items-center gap-4 justify-center border-2 px-28 py-2 border-gray-300 rounded-sm">
                    <img className="w-8 h-8 rounded-full" src={google} alt="" />
                    <p className="text-base">Google</p>
                </button>
            </div>
            <div className="mt-3">
                <button onClick={handleFacebookLogin} className="flex items-center gap-4 justify-center border-2 px-28 py-2 border-gray-300 rounded-sm">
                    <img className="w-8 h-8 rounded-full" src={facebook} alt="" />
                    <p className="text-base">Facebook</p>
                </button>
            </div>
        </div>

    );
};

export default SocialLogIn;