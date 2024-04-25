


function result(){
  var userName=document.getElementById("userName")
  var pass=document.getElementById("Password")
  var result=document.getElementById("result")




  if(userName.value.length<4 && pass.value.length<6 || pass.value.length>12 ){
     result.textContent="Incorrect Username or Password.Try Again!"
     userName.style.border = "1px solid red"
     userName.style.background="rgba(255,0,0,0.1)"
     pass.style.border = "1px solid red"
     pass.style.background="rgba(255,0,0,0.1)"
     
     
  }
  else if(userName.value.length<4){
     result.textContent="Incorrect Username or Password.Try Again!"
   userName.style.background="rgba(255,0,0,0.1)"
     userName.style.border = "1px solid red"
     
  }
  else if(pass.value.length<6 || pass.value.length>12){
    result.textContent="Incorrect Username or Password.Try Again!"      
   pass.style.background="rgba(255,0,0,0.1)"
     pass.style.border = "1px solid red"
  }

  
  else{
        result.textContent="Success!!" + "\n" + "Username - " +userName.value  + "\n" + "  Password - " +pass.value
        userName.style.border=""; pass.style.border=""; 
        result.style.color="black"



}
}