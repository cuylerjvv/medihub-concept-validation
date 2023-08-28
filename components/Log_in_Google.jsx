'use client'

import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '@app/firebase-config';
import Image from "next/image";
import googleIcon from '@app/images/google.png'

export default function Log_in_Google() {

    const router = useRouter()
    const provider = new GoogleAuthProvider();

    const googleLogIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
                // The signed-in user info.
                const user = result.user;
                console.log(user)

                if (auth.currentUser.emailVerified === false) {
                    alert("Email has not been verified.")
                    console.log('Email not verified: ' + auth?.currentUser?.email)
                    signOut(auth)
                        .then(() => {

                        })
                }
                else {
                    console.log('User logged in: ' + user?.email)
                    return router.push('/home')
                }

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email)
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential)
            });
    }

    return (
        <div className="flex flex-col justify-center w-full">
            <button
                className='font-inter flex justify-center my-2 bg-white border-2 border-borders hover:border-secondary text-primary font-medium w-full py-2 px-4 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300'
                onClick={googleLogIn}>
                    <span className="mr-4"><Image src={googleIcon}
                    alt='google-icon'
                    width={22}
                    height={22}></Image></span>Log in with Google</button>
        </div>
    )
}
