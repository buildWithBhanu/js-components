function calculateAge() {
    let userDate = document.getElementById("dob").value;
    if (userDate === "") {
        document.getElementById("Final").innerHTML = "please enter your FUCKING BIRTH date you idiot asshole 👉👌💦";
        return;

    }
    let birthYear = new Date(userDate).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    document.getElementById("Final").innerHTML =
        "Your age is " + age + " years";

}
