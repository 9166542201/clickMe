document.getElementsByName("input")[0].onclick = f1
const f = function () {
    const x = document.getElementById("out")
    if (!x.textContent) x.textContent = "HiHi"
    else x.textContent = ""
}
function f1() {
    const x = document.getElementById("out")
    if (!x.textContent) x.textContent = "Hello"
    else x.textContent = ""
}
