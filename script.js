const signupToggle=document.querySelector(".show-signup");
const loginToggle=document.querySelector(".show-login");
const loginForm=document.querySelector(".login-form");
const signupForm=document.querySelector(".signup-form");

const signUpBtn=document.querySelector(".sign-up-btn");
const loginBtn=document.querySelector(".log-in-btn");

signupToggle.addEventListener("click",(e)=>{
    e.preventDefault();
    loginForm.classList.add("inactive");
    signupForm.classList.add("active");
    // loginForm.classList.add("active")
})
signUpBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    loginForm.classList.add("inactive");
    signupForm.classList.add("active");
    // loginForm.classList.add("active")
})

loginToggle.addEventListener("click",(e)=>{
    e.preventDefault();
    loginForm.classList.remove("inactive");
    signupForm.classList.add("inactive");
})
