if (localStorage.getItem("currentUser")){
    location.href="./index.html"
}

let form =document.querySelector("form")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let username = document.getElementById("username").value.trim()
    let password = document.getElementById("password").value.trim()
    let email = document.getElementById("email").value.trim()

    if(password.length < 8){
        alert("Password must be at least 8 characters long")
    }
    else{
        if(localStorage.getItem(username)){
            let user = JSON.parse(localStorage.getItem("users"))
            user.push({
                username,
                password,
                email,
            })
            localStorage.setItem("users", JSON.stringify(users))
            location.href="./index.html"
        }
        else{
            localStorage.setItem(
                "users",
                JSON.stringify([{
                    username,
                    password,
                    email,
                }])
            )
        }
        alert("Registration successful")
        location.href="./login.html"
    }
})