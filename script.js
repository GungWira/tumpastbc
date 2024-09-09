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
