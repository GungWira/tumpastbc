const hamMenu = document.querySelector(".burger")
const mobileNav = document.querySelector(".mobileNav")
const closeBtn = document.querySelector(".close-btn")

hamMenu.addEventListener("click", () => {
    mobileNav.style.left = "0%"
    setTimeout(() => {
        mobileNav.style.backgroundColor = "#1d1d1d70"
    }, 200);
})

mobileNav.addEventListener("click", (e) => {
    if (e.target.classList.contains("mobileNav")){
        mobileNav.style.backgroundColor = "#1d1d1d00"
        setTimeout(() => {
            mobileNav.style.left = "-110%"
        }, 200);
    }
})

closeBtn.addEventListener("click", (e) => {
    mobileNav.style.backgroundColor = "#1d1d1d00"
    setTimeout(() => {
        mobileNav.style.left = "-110%"
    }, 200);
})


const soals = document.querySelectorAll(".q");

function Answear(event) {
    const idsoal = event.target.id;
    const idjawaban = idsoal.replace("q", "a");
    const jawaban = document.getElementById(idjawaban);
    const soalk = document.getElementById(idsoal)
    const panah = soalk.querySelector('img')
    if (jawaban.style.display == "none" || jawaban.style.display == "") {
        jawaban.style.display = "block";
    } else {
        jawaban.style.display = "none";
    }
    panah.classList.toggle('rotate');
}

soals.forEach(soal => {
    soal.addEventListener('click', Answear);
})
