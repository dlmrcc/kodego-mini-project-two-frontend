import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import { LoginAPI } from '../utils/fetch/loginFetch';
import { RetrieveFaveRecipeAPI } from '../utils/fetch/recipeFetch';
// import { LoginAPI } from '../utils/fetch';


function Login() {

  //handle togglePassword
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }
  
//to reset the email and password value to null
  useEffect(() => {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }, []);

  //Checking if the user is already logged
  let isUserLoggedIn = false;
    try{
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if(isUserLoggedIn && isUserLoggedIn.id){
            window.location.href = 'https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/homepage'
        }
    }catch(error)
    {
      console.log("error :",error)
    }
    
     //Retrieve to database the login credentials
    const login = ()=>{
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        console.log('email: ', email)
        console.log('password: ', password)

        if (!email || !password ) 
        {
          alert("Enter your correct email and password.");
        }
     else
     {
      
       LoginAPI(email, password)
        .then((result)=>{
            return result.json()
        })
        .then((result)=>{
            // console.log('result: ', result)
            // console.log('localStorage: ', localStorage)
      
            if(result.success){
                //go to dashboard / home
              
              RetrieveFaveRecipeAPI(email)
                 .then((results)=>{
                  return results.json();
             
                 })
                 .then((results)=>{
                  if(results.success){
                    localStorage.setItem('FaveRecipe', JSON.stringify(results.faveRecipeData ))
                    // console.log('resultdsssss: ', results)
                  }
                  else{
                    const addNew ={faveRecipe: " "}
               
                        localStorage.setItem('FaveRecipe', JSON.stringify([]))
                   
                  }
                 })
                 .catch(error=>{
                  console.log('error: ', error)
              })
              localStorage.setItem('user', JSON.stringify(result.userData))
          
              window.location.href = 'https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/homepage'
            }else{
              alert("Invalid email or password.");
            }
        })
        .catch(error=>{
            console.log('error: ', error)
        })
    }
  }


  const cancel =()=>
  {
    window.location.href = 'https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/homepage'
  }

  return (
    !isUserLoggedIn ?
    <>
    <div className="div-login bg-dark">
      <div className="container py-5 h-100 primary-div">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
            <div className="card shadow-2-strong radius bg-dark bg-gradient login-form" >
              <div className="card-body p-5 text-center opacity-tags">
                
                <h5 className="mb-2 opacity-tags">Login</h5>

                <div className="form-outline mb-1">
                  <input id="email" type="email" placeholder="Email" className="border-radius form-control form-control-sm bg-light form-warning border-warning" />
                  <label className="form-label">Email</label>
                </div>

                <div className="form-outline mb-1 position-relative">
                  <input id="password" type={showPassword ? "text" : "password"} placeholder="Password" className="border-radius form-control form-control-sm border-warning" />
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                  <i className={`position-absolute top-50 end-0 translate-middle-y pb-5 mb-4 mt-2 me-1 ${showPassword ? "text-primary" : "text-muted"}`} onClick={handleTogglePassword}>
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </i>
                </div>

                <div className="form-outline d-grid gap-2">
                  <button className="btn btn-warning bg-gradient btn-sm btn-block border-radius" onClick={login}>Login</button>
                </div>

                <div className="form-outline d-grid gap-2">
                  <button className="btn btn-warning bg-gradient btn-sm btn-block border-radius" onClick={cancel}>Cancel</button>
                </div>

                <hr className="my-3"/>

                <div>
                  <p className="mb-0 ">Don't have an account?   <Link to='/signup' >
                  <a href="/signup" className="text-warning fw-bold ">Sign Up</a>
                   </Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    :
   <></>
  );
}

export default Login;
