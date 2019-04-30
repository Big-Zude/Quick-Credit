const signUp=function(){
    var firstName = document.getElementById("fname").value
    var lastName = document.getElementById("lname").value
    var email=document.getElementById("email").value
    var password = document.getElementById("password").value
    var Cpassword = document.getElementById("psw-repeat").value

        if(firstName=="" || lastName=="" || email=="" || password=="" || Cpassword==""){
            alert("please fill all fields...")
        }
        else if((password.length)<6){
            alert("Password should have 6 characters or more")
        }
        else if(password!==Cpassword){
            alert("Your passwords don't match. Try again...")
        }
        else{
            alert("Resgistration successfully completed")
        }
}
