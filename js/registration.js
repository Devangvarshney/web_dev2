const fullName = document.querySelector("#fname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

showPass.addEventListener("click", () => {
    if (password.className == "showing") {
        password.setAttribute("type", "password")
        password.classList.remove("showing")
    } else {
        password.setAttribute("type", "Text")
        password.classList.add("showing")
    }
})
let createAccount = document.querySelector("#createAccount");
createAccount.addEventListener("click", () => {
    // e.preventDefault()

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user[0] === email.value)) {
        alert("An Account with same Email already exists");
        return; // Exit the function if email already exists
    }

    let newUser = [email.value, password.value, fullName.value];
    users.push(newUser);

    // Store the updated users array in local storage
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User created successfully");
    email.value = ""
    password.value = ""
    fullName.value = ""
    alert("Acount created successfully! \nPlease Login Now.")
    location.href = "./Login.html"



    // Create a new user array and add it to the users array


});





