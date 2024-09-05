const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const signinbtn = document.getElementById("signin");
const signupbtn = document.getElementById("signup");

loginForm.style.display = "none";

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");
});

signinbtn.addEventListener("click", () => {
  console.log("go to login page");
  signupForm.style.display = "none";
  loginForm.style.display = "flex";
  document.title = "Login Page";
});

signupbtn.addEventListener("click", () => {
  console.log("go to signup page");
  loginForm.style.display = "none";
  signupForm.style.display = "flex";
  document.title = "Signup Page";
});
