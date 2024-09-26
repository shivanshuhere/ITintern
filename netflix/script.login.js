const signinBox = document.querySelector('#box')
const signUpBox = document.querySelector('#box1')
const signUp = document.querySelector("#signUp")
const signIn = document.querySelector("#signIn")

function handleFormChange (e){
    let show, hide
  if(e.target.id == "signIn"){
    hide = signinBox
    show = signUpBox
  }
  else{
    hide = signUpBox
    show = signinBox
  }
  console.log(hide)

  hide.classList.remove("showBox")
  hide.classList.add("hideBox")
  show.classList.remove("hideBox")
  show.classList.add("showBox")

}

signIn.addEventListener("click", handleFormChange)
signUp.addEventListener("click", handleFormChange)