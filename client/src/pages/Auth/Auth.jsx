 import React from 'react'
 import { useState } from 'react'
import icon from "../../assets/icon.png"
import AboutAuth from './aboutAuth'
import './Auth.css'

 const Auth = () => {
  const [isSignup,setSignup]=useState(true)
  // setSignup=useState(true)
  const handleSwitch = ()=>{
    setSignup(!isSignup)
  }
   return (
      <section className="auth-section">
        {isSignup && <AboutAuth/>}
        <div className="auth-container-2">
          {!isSignup && <img src={icon} alt='stcak overflow' className="login-logo"/>}
          <form >
            {
              isSignup && (<label>
                <h4>Display Name</h4>
                <input type="text" name='name' id ='name' />
              </label>)
            }
            <label htmlFor="email">
              <h4>Email</h4>
              <input type="email" name='email' id = "email"/>
            </label>
            <label htmlFor="password">
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4>Password</h4>
              { !isSignup && <p style={{ color:"#666767" ,fontSize:"13px"}}>forgot password?</p>}
              </div>
              <input type="password" name="password" id='password' />
             {isSignup && <p style={{ color:"#666767" ,fontSize:"13px"}}>Password must contain atleast eight<br/> characters, including at least 1 letter and 1<br/> number.</p>}
            </label>
            {
              isSignup && (
                <label htmlFor='check'>
                  <input type="checkbox" name="check" id="check" />
                  <p style={{fontSize:"13px"}}>Opt-in to receive occassional,<br/> product updates, user research invitations,<br/>
                  company announcements, and digests.</p>

                </label>
              )
            }
            <button type='submit' className="auth-btn">{isSignup ? "Sign up":"Log in"}</button>
            { isSignup && (
              <p style={{ color:"#666767" ,fontSize:"13px"}}>
                By clicking "Sign up",you agree to our
                <span  style={{ color:"#007ac6"}}> terms of <br/> service</span>
                <span style={{ color:"#007ac6"}}> privacy policy</span> and
                <span  style={{ color:"#007ac6"}}> cookie policy</span> 
              </p>
            )}
          </form>
          <p>
            {isSignup ? "Already have an account" : "Don't have an account"}
            <button type="button" className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in":"Sign up"}</button>
          </p>
        </div>
      </section>
   )
 }
 
 export default Auth