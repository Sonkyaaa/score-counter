const btn1 = document.querySelector("#p1button");
const btn2 = document.querySelector("#p2button");
const resetv = document.querySelector("#reset");
let p1display = document.querySelector("#p1display");
let p2display = document.querySelector("#p2display");
let select = document.querySelector("#select");

let p1score = 0;
let p2score = 0;
let winningscore = 3;
let isgameover = false;

btn1.addEventListener("click", function () {
    if (!isgameover) {
        p1score += 1;
        if (p1score === winningscore) {
            isgameover = true;
            p1display.classList.add("has-text-success");
            p2display.classList.add("has-text-danger")
           


        }
        p1display.textContent = p1score;
    }

})
btn2.addEventListener("click", function () {
    if (!isgameover) {
        p2score += 1;
        if (p2score === winningscore) {
            isgameover = true;
            p2display.classList.add("has-text-success")
            p1display.classList.add("has-text-danger")
          

        }
        p2display.textContent = p2score;
    }

});
resetv.addEventListener("click", reset)
function reset() {
    isgameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("has-text-success", "has-text-danger")
    p2display.classList.remove("has-text-success", "has-text-danger")
}

select.addEventListener("change", function () {
    winningscore = parseInt(this.value)
    reset();
})