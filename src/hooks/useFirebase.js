import { useState , useEffect} from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, getIdToken, updateProfile} from "firebase/auth";


// initialize firebase app
initializeFirebase();


const useFirebase = () =>{
    const [user, setUser] =useState({});
    const [isLoading, setIsLoading ] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCrendential) =>{
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            // save user to database
            saveUser(email, user, 'POST')

            // send name to firebase after creation
            updateProfile(auth.currentUser,{
            displayName: name})
            .then(() => {
            
            }).catch((error) => {
            
            });
            navigate('/');
        })
        .catch((error)=>{
            setAuthError(error.message);
            console.log(error);
        })
        .finally( ()=> setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location.state?.from || '/';
            navigate(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally( ()=> setIsLoading(false));
        
    }

    const signInWithGoogle = (location, navigate) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           const user = result.user;
           saveUser(user.email, user.displayName, 'PUT')
           setAuthError('');
           const destination = location.state?.from || '/';
            navigate(destination);
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
                getIdToken(user)
                .then(idToken =>{
                    setToken(idToken);
                })
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    },[auth] )

    useEffect(() =>{
        fetch(`https://hidden-journey-40317.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user])

    const logout = () =>{
        signOut (auth).then(()=>{
            // signout not successful.
        }).catch((error)=>{
            // An error happene
        })
        .finally (()=> setIsLoading(false));
    }

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://hidden-journey-40317.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return{
        user, 
        admin,
        isLoading,
        token,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logout
    }

}

export default useFirebase;