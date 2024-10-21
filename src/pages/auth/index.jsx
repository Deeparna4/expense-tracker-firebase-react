import {auth,provider} from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate,Navigate} from 'react-router-dom'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
import "./styles.css"
export const Auth=()=>{
const navigate=useNavigate()
const {isAuth}=useGetUserInfo();
    const signInWithGoogle=async()=>{
const results=await signInWithPopup(auth,provider);


const authInfo={
    userID:results.user.uid,
    name:results.user.displayName, 
    profilePhoto:results.user.photoURL,
    isAuth:true
}
localStorage.setItem("auth",JSON.stringify(authInfo));
navigate("/expense-tracker");
    }
if(isAuth){
    return <Navigate to="/expense-tracker"/>
}
    return (
        <div className="login-page">
          
            <div className="background-circle circle-1"></div>
            <div className="background-circle circle-2"></div>
            <div className="background-circle circle-3"></div>
            <div className="background-circle circle-4"></div>
            <div className="background-circle circle-5"></div>
            <div className="background-circle circle-6"></div>
            <div className="background-circle circle-7"></div>
            <div className="background-circle circle-8"></div>
            
       
            <div className="login-box">
                <p>Sign In With Google to Continue</p>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>
                    Sign In With Google
                </button>
            </div>
        </div>
    );
    
    
    
    
    
    
}