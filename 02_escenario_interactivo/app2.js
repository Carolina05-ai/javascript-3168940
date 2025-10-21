const sun = document.querySelectorAll(".sun");
const sool = document.getElementById('sool');
const sool2 = document.getElementById('sool2');
const sool3 = document.getElementById('sool3');
let soles = 0;

//funciones 2
sun.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.add("saltar");
        soles++;
    })

});
