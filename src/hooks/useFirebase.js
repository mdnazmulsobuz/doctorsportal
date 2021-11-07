import { useState , useEffect} from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile} from "firebase/auth";


// initialize firebase app
initializeFirebase();


const useFirebase = () =>{
    const [user, setUser] =useState();
    const [isLoading, setIsLoading ] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCrendential) =>{
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            // send name to firebase after creation
            updateProfile(auth.currentUser,{
            displayName: name})
            .then(() => {
            
            }).catch((error) => {
            
            });
            history.replace('/');
        })
        .catch((error)=>{
            setAuthError(error.message);
            console.log(error);
        })
        .finally( ()=> setIsLoading(false));
    }

    const loginUser = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location.state?.from || '/';
            history.replace(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally( ()=> setIsLoading(false));
        
    }

    const signInWithGoogle = (location, history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           const user = result.user;
           setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally( ()=> setIsLoading(false));
    }


    // observe user state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    },[] )
    const logout = () =>{
        signOut (auth).then(()=>{
            // signout not successful.
        }).catch((error)=>{
            // An error happene
        })
        .finally (()=> setIsLoading(false));
    }
    return{
        user, 
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logout
    }

}

export default useFirebase;