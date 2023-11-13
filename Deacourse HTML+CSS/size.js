// ini versi clean codenya
let container = document.getElementById("mainpage"), 
screen = document.getElementById("screen");

const resize = () => {
    const isChecked = screen.checked;
    isChecked ? container.classList.remove("container") : container.classList.add("container") ;
}

// Kita bisa juga memakai yang ini
//  function resize() {
//     if(screen.checked){
//         container.classList.remove("container")
//     }else {
//         container.classList.add("container")
//     }
// }



addEventListener("change", resize, false)

