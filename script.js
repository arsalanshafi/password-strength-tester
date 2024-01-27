const input = document.querySelector("#pwd");
const messages = Array.from(document.querySelectorAll("li"));

input.addEventListener("input",() => {
    let pwd = input.value;
    if(pwd.length < 8) messages[0].classList.add("show");
    else messages[0].classList.remove("show");

    let up = new RegExp("[A-Z]");

    if(up.test(pwd)) messages[1].classList.remove("show");
    else messages[1].classList.add("show");

    let n = new RegExp("[0-9]")
    if(n.test(pwd)) messages[2].classList.remove("show");
    else messages[2].classList.add("show");

    let sp = new RegExp("[$&+,:;=?@#|'<>.^*()%!-]");
    if(sp.test(pwd)) messages[3].classList.remove("show");
    else messages[3].classList.add("show");

    
})