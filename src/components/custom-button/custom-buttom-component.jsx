import React from 'react'
import './custom-button.styles.scss'
import signInWithGoogle  from '../../firebase/firebase.utils'
const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => (
    <button className= {`${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button`} {...otherProps} 
    onClick={isGoogleSignIn ? signInWithGoogle : ''}>
        {children}    
    </button>

)
export default CustomButton;