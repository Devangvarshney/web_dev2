let showPass = document.querySelector("#showPass")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let isLogin = false;

showPass.addEventListener("click", () => {
    if (password.className == "showing") {
        password.setAttribute("type", "password")
        password.classList.remove("showing")
    } else {
        password.setAttribute("type", "Text")
        password.classList.add("showing")
    }
})

let loginButton = document.querySelector("#signin");
loginButton.addEventListener("click", () => {


    if (localStorage.getItem("Login")) {
        alert("Already login in go to profile")
        location.href = "./Profile.html"
    } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let foundUser = users.find(user => user[0] === email.value && user[1] === password.value);
        let passwordMatch = users.find(user => user[1] === password.value);

        if (foundUser) {
            console.log("Login successful");
            isLogin = true;
            localStorage.setItem("Login", isLogin)
            localStorage.setItem("LoginEmail", email.value)
            location.href = "./Profile.html"
        } else {
            alert("Invalid Credindial")
            // if (!passwordMatch) {
            //     let incorrect = document.querySelector("#incorrect")
            //     incorrect.innerHTML = "Invalid Credindial"
            // }
        }

    }



});

document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault();
});



