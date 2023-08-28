'use client'

import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup, sendEmailVerification, signOut } from "firebase/auth";
import { auth } from '@app/firebase-config';
import Image from "next/image";
import googleIcon from '@app/images/google.png'

export default function SU_Google() {

    const router = useRouter()
    const provider = new GoogleAuthProvider();

    const googleSignUp = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
                // The signed-in user info.
                const user = result.user;
                console.log(user)

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("Verification email send to: " + auth?.currentUser?.email)
                    });

                alert("Verification email sent")

                signOut(auth)
                    .then(() => {

                    })

                return router.push('/log_in')
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
                onClick={googleSignUp}>
                <span className="mr-4"><Image src={googleIcon}
                    alt='google-icon'
                    width={22}
                    height={22}></Image></span>Sign up with Google</button>
        </div>
    )
}
