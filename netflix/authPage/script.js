const form1 = document.querySelector("#form1")
const form2 = document.querySelector("#form2")
const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const signIn = document.querySelector("#signIn")
const signUp = document.querySelector("#signUp")


signIn.addEventListener("click", ()=>{
  // form2.style.display = "block";
  // form1.style.display = "none";
  // p2.style.display = "block";
  // p1.style.display = "none";
  document.title = "Sing In Page"
  
})
signUp.addEventListener("click", ()=>{
  // form1.style.display = "block";
  // form2.style.display = "none";
  // p1.style.display = "block";
  // p2.style.display = "none";
  document.title = "Sing Up Page"
})

form1.addEventListener("submit", (e)=>{
  e.preventDefault();
})
form2.addEventListener("submit", (e)=>{
  e.preventDefault();
})