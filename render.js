
const { ipcRenderer, remote } = require("electron");
function rep() {
    setTimeout(() => {
        ipcRenderer.send("testt", { status: true });
    },
        1000);
}
setInterval(() => {
    let test = document.querySelector("._3M-N-");
    let text = document.querySelector("._3u328");

    test.click();
    rep();

},
    5000);
let all = document.querySelectorAll("._12pGw span");
all.forEach((value, index) => {
    if (index == all.length - 1) {
        let spli = value.innerHTML;
        spli = spli.split("-");
        console.log(spli[0]);
        ipcRenderer.send("tes", { status: true, texto: value.innerHTML });
    }
})
let all = document.querySelectorAll("._12pGw span");
setInterval(() => {
    all.forEach((value, index) => {
        if (index == all.length - 1) {
            let spli = value.innerHTML;
            spli = spli.split("-");
            if (spli[0] == "Ergobot") {
                ipcRenderer.send("tes", { status: true })
            }
        }
    });
}, 1000);
