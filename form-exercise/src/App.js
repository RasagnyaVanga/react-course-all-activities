import './App.css';

import { useActionState,useState, useRef, useEffect } from 'react';
import signup from './signuplogic.js';
import checkStrength from './pwstrength.js';
export default function App() {

  const[password, setPassword] =useState('');
  const [state, signupAction] = useActionState(signup, { errors: {}}); 
  const formRef = useRef('');
  useEffect(() => {
    if (state.success) {
      formRef.current.reset(); // clears all form inputs
      setPassword(""); // also clear password state
    }
  }, [state.success]);
  return (
    <>
   
      <form ref={formRef} action={signupAction}>

        <h1>SIGN UP</h1>
        
        <div>
          <label htmlFor="username">Username : </label>
          <input id="username" name="username" />
          {state.errors?.userName &&
            (<p style={{ color: "red" }}>{state.errors.userName}</p>)
          }
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input onChange = {(e)=>setPassword(e.target.value)} id="password" value={password} name="pw" /> 
          {password && 
          (<p style={{color:"red"}}> {checkStrength(password)}</p>)
          }
          {state.errors?.password &&
            (<p style={{ color: "red" }}>{state.errors.password}</p>)
          }
        </div>

        <div>
          <label htmlFor="confirmpw">Rewrite Password : </label>
          <input id="confirmpw" name="confirmpw" />
          {state.errors?.confirmPassword &&
            (<p style={{ color: "red" }}>{state.errors.confirmPassword}</p>)
          }
        </div>

        <button type="submit">Sign Up</button>
      </form>

      {state.success &&
        (<p style={{ color: "green" }}>Sign Up successful</p>)
      }
    </>
  );
}
