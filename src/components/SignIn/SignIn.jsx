import React, { useState , useContext } from 'react'
import { signInWithGooglePopup , createUserDocument , signInAuthWithEmailAndPassword } from '../../utils/firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import FormInput from '../Form-input/Form-input';
import Button from '../Button/Button';
import './SignIn.scss';

const defaultFormFields = {
  email: "",
  password: ""
}


function SignIn() {
  const [formFields , setFormFields] = useState(defaultFormFields);
  const { email , password } = formFields;

  const navigate = useNavigate();

const signInWithGoogle = async () => {
   await signInWithGooglePopup();
   navigate('/')
}


const resetFormFields = () => {
  setFormFields(defaultFormFields)
}

const handleChange =  (event) => {
  const { name , value } = event.target;
  setFormFields({...formFields, [name]: value});
}

const handleSubmit = async (event) => {
  event.preventDefault()

  try {
    const {user} = await signInAuthWithEmailAndPassword(email, password);

    resetFormFields();
    navigate('/')
  } catch (error) {
    if(error.code === 'auth/user-not-found'){
      alert('User not found')
    }
    console.log(error)
    if(error.code === 'auth/wrong-password'){
      alert('Password is incorrect')
    }
  }


}
 
return (
        <div className="sign-in">
            <h2>I have already have an account</h2>
            <p>Sign in with your email and password</p>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                label="Email"
                inputOptions={{
                  type: "email",
                  name : "email",
                  value: email,
                  onChange: handleChange,
                  required : true
                }} />
                
                <FormInput 
                label="Password"
                inputOptions={{
                  type:"password",
                  name : "password",
                  value: password,
                  onChange: handleChange,
                  required: true
                  }} />

                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button buttonType="google" onClick={signInWithGoogle} >Sign In With Google</Button>
                </div>
            </form>
    </div>
  )
}

export default SignIn