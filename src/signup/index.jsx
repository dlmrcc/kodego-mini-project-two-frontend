

import { Link } from "react-router-dom";
import { SignUpAPI } from "../utils/fetch/signupFetch";
import "./signup.css";



function Signup() {
    //handle the signup / check the value of every element 
        const handleSignup = () => {
        const firstname = document.getElementById("firstname").value
        const lastname = document.getElementById("lastname").value
        const email = document.getElementById("email").value
        const password = document.getElementById("new-password").value
            const confirmPassword = document.getElementById("confirm-password").value
       
        let errorMessages = [];
        if (!firstname) {
          errorMessages.push("Please enter your firstname.");
        }
        if (!lastname) {
          errorMessages.push("Please enter your lastname.");
        }
        if (!email) {
            errorMessages.push("Please enter your email.");
          } else if (email.indexOf("@") === -1) {
            errorMessages.push("Please enter a valid email address.");
          }
        
        if (password !== confirmPassword) {
          errorMessages.push("Passwords did not match.");
        }
        if (password.length<8 ) {
            errorMessages.push("Your password must be at least 8 characters.");
          }
        if (errorMessages.length > 0) {
          alert(errorMessages.join("\n"));
        } 
        else{
        SignUpAPI(email, password, lastname, firstname)
        .then((result)=>{
            return result.json()
        })
        .then((result)=>{
            console.log('result: ', result)
            console.log('localStorage: ', localStorage)
            if(result.success){
                localStorage.clear()
                window.location.reload()
                window.location.href = 'https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/login' 
            }else{
                    alert("Account is already exist.");
                 
                }
            })
            .catch(error=>{
                console.log('error: ', error)
            })
        }
        
      }

      const goToLogin =()=>
      {
        window.location.href = 'https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/login' 
      }

return (

    <>
    
        <div className="div-login bg-dark">
   
   <div class="container py-5 h-100 primary-div">
    <div class="row d-flex justify-content-center align-items-center h-100 ">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div class="card shadow-2-strong radius bg-dark bg-gradient login-form" >
          <div class="card-body p-5 text-center opacity-tags">
            <h5 class="mb-4 opacity-tags">Sign Up Form</h5>

            <div class="form-outline mb-2">
              <input  id="firstname"  type="text" placeholder="Firstname" class="border-radius form-control form-control-sm border-secondary" />
              <label class="form-label" >Firstname*</label>
            </div>

            <div class="form-outline mb-1">
              <input id="lastname" type="text" placeholder="Lastname"  class=" border-radius form-control form-control-sm border-secondary" />
              <label class="form-label">Lastname*</label>
            </div>

            <div class="form-outline mb-1">
              <input id="email" type="email" placeholder="me@mail.com"  class="border-radius form-control form-control-sm border-secondary" />
              <label class="form-label">Email*</label>
            </div>

            <div class="form-outline mb-1">
              <input id="new-password" type="password" placeholder="New Password"  class="border-radius form-control form-control-sm border-secondary" />
              <label class="form-label" for="typePasswordX-2">Password*</label>
            </div>

            <div class="form-outline mb-1">
              <input id="confirm-password" type="password" placeholder="Confirm Password"  class="border-radius form-control form-control-sm border-secondary" />
              <label class="form-label" for="typePasswordX-2">Confirm Password*</label>
            </div>

            <div class="form-outline d-grid gap-2">
            <button id="signup-btn" class="btn btn-warning bg-gradient btn-sm btn-block border-radius" onClick={handleSignup}>Sign Up</button>
            </div>
            <hr className="my-3"/>
            


            <div>
                  <p className="mb-0 ">Go to   <Link to='/login' >
                  <a href="/signup" className="text-warning fw-bold ">Login</a>
                   </Link></p>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
        
    </>
);
}


export default Signup;


// import { useState } from 'react';

// function Signup() {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   }

//   return (
//     <div>
//       <label htmlFor="password">Password</label>
//       <div className="input-group">
//         <input
//           id="password"
//           type={showPassword ? "text" : "password"}
//           className="form-control"
//         />
//         <button
//           className="btn btn-outline-secondary"
//           type="button"
//           onClick={handleTogglePassword}
//         >
//           {showPassword ? "Hide" : "Show"}
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Signup;