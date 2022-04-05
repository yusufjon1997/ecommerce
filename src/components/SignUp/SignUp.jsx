import React , { useState } from 'react'
import { 
  createAuthWithEmailAndPassword ,
  createUserDocument  
} from '../../utils/firebase/Firebase';
import FormInput from '../Form-input/Form-input';
import './SignUp.scss';
import Button from '../Button/Button';



const defaultFormFields = {
  displayName : "",
  email : "",
  password : "",
  confirmPassword : ""
}

function SignUp() {

  const [formFields , setFormFields] = useState(defaultFormFields);
  const { displayName , email , password , confirmPassword} = formFields;


  
const resetFormFields = () => {
  setFormFields(defaultFormFields);
}

const submitHandle = async (event) => {
  event.preventDefault();
  console.log(formFields)
  // confirm password and confirm password are the same 
  if(password !== confirmPassword) {
    alert('error')
  } 

  try {
    const { user } = await createAuthWithEmailAndPassword(email , password);

    await createUserDocument(user , { displayName});
    resetFormFields();

  } catch (error) {
    if(error.code === 'auth/email-already-in-use'){
      alert('email already resgistered')
    }
  }
}


 // target names and formfields names should be the same
const handleChange = (event) => {
    const { name , value} = event.target;
    setFormFields({...formFields , [name]: value})
}


  return (
    <div className="sign-up">

      <h2>I do not have an account</h2>
      <p>Sign up with your email and password</p>

      <form onSubmit={submitHandle}>

          <FormInput label="Display name"
          inputOptions={{
            type: "text", 
            onChange: handleChange, 
            name: "displayName", 
            value: displayName, 
            required : true
          }}
          />

          <FormInput 
          label="Email"
          inputOptions={{
            type: "email", 
            onChange: handleChange, 
            name: "email", 
            value: email, 
            required : true
          }}
          />

          <FormInput 
          label="Password"
          inputOptions={{
            type: "password", 
            onChange: handleChange, 
            name: "password", 
            value: password, 
            required : true
          }}
          />

          <FormInput 
          label="Confirm Password"
          inputOptions={{
            type: "password", 
            onChange: handleChange, 
            name: "confirmPassword", 
            value: confirmPassword, 
            required : true
          }}
          />
          <Button buttonType="inverted"  type="submit" >Sign in</Button>
          {/* <button type="submit"> Sign Up</button> */}
      </form>
    </div>
  )
}

export default SignUp