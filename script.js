const f = function () {
    const x = document.getElementById("out")
    if (!x.textContent) x.textContent = "tagAttr"
    else x.textContent = ""
}
const f1 = function () {
    const x = document.getElementById("out")
    if (!x.textContent) x.textContent = "elementProperty"
    else x.textContent = ""
}
const f2 = function () {
    const x = document.getElementById("out")
    if (!x.textContent) x.textContent = "addEvent"
    else x.textContent = ""
}
document.getElementsByName("input")[0].onclick = f1
document.querySelector("#event").addEventListener("click", f2)
