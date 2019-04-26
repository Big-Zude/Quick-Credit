const login=function() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "login@gmail.com" && password == "123456") {
        alert("Login successfully");
        window.open("services.html"); // Redirecting to other page.
        return false;
    }
    else {
            var username = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            if (username == "admin@gmail.com" && password == "123456") 
            {
                alert("Login successfully");
                window.open("admin.html"); // Redirecting to other page.
                return false;
            }
        }
    }
