let scoreComp = 0;
let scorePlayer = 0;
let skorMaksimal = 3; // Skor maksimal yang harus dicapai

function getPilihanComp() {
    var comp = Math.random();

    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
}

function getHasil(comp, player) {
    if (player == comp) return "SERI!";

    const playerWins =
        (player == "gajah" && comp == "orang") ||
        (player == "orang" && comp == "semut") ||
        (player == "semut" && comp == "gajah");

    // menambahkan score ke masing - masing pemain jika sudah mencapai score maksimal maka permain akan berakhir
    if (playerWins) {
        scorePlayer++;
        if (scorePlayer === skorMaksimal || scoreComp === skorMaksimal) {
            akhiriPermainan();
        }
        return "MENANG!";
    } else {
        scoreComp++;
        if (scorePlayer === skorMaksimal || scoreComp === skorMaksimal) {
            akhiriPermainan();
        }
        return "KALAH!";
    }
}

function random() {
    const imgComp = document.querySelector(".img-comp");
    const img = ["gajah", "semut", "orang"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute("src", "img/" + img[i++] + ".png");
        if (i == img.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (select) {
    select.addEventListener("click", function () {
        if (scorePlayer === skorMaksimal || scoreComp === skorMaksimal) {
            return;
        }

        const pilihanComp = getPilihanComp();
        const pilihanPlayer = select.className;
        const hasil = getHasil(pilihanComp, pilihanPlayer);
        random();
        setTimeout(() => {
            const imgComp = document.querySelector(".img-comp");
            imgComp.setAttribute("src", "img/" + pilihanComp + ".png");

            const info = document.querySelector(".info");
            info.innerHTML = hasil;

            // membuat element baru untuk menampung score
            const skorCompElement = document.querySelector(".score-comp");
            const skorPlayerElement = document.querySelector(".score-player");
            // memasukan score ke element yang telah dibuat
            skorCompElement.innerHTML = scoreComp;
            skorPlayerElement.innerHTML = scorePlayer;

            if (scorePlayer === skorMaksimal || scoreComp === skorMaksimal) {
                akhiriPermainan();
            }
        }, 1000);
    });
});

function akhiriPermainan() {
    // Buat pesan dan tombol "Main Lagi?"
    const info = document.querySelector(".info");
    info.style.fontSize = "12px";
    info.style.width = "300px";
    info.style.left = "40%";
    info.style.marginLeft = "-100px";
    info.innerHTML =
        scorePlayer === skorMaksimal
            ? "PLAYER memenangkan permainan!"
            : "COMPUTER memenangkan permainan!";

    const mainLagiButton = document.createElement("button");
    mainLagiButton.classList.add("main-lagi");
    mainLagiButton.innerText = "Main Lagi?";
    mainLagiButton.addEventListener("click", function () {
        // Reset permainan
        scorePlayer = 0;
        scoreComp = 0;
        skorMaksimal = 3;
        info.innerHTML = "";
        const skorCompElement = document.querySelector(".score-comp");
        const skorPlayerElement = document.querySelector(".score-player");
        skorCompElement.innerHTML = scoreComp;
        skorPlayerElement.innerHTML = scorePlayer;

        // Aktifkan kembali tombol pilihan pemain
        pilihan.forEach(function (select) {
            select.disabled = false;
        });

        // Hapus tombol "Main Lagi?"
        mainLagiButton.parentNode.removeChild(mainLagiButton);
    });

    // Matikan semua tombol pilihan pemain
    pilihan.forEach(function (select) {
        select.disabled = true;
    });

    // Tambahkan tombol "Main Lagi?" ke dalam DOM
    info.appendChild(mainLagiButton);
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pGajah.className;
//     // console.log('comp :'+pilihanComp);
//     // console.log('player :'+pilihanPlayer);
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     // console.log('hasil :'+ hasil);
//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', 'img/'+ pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pOrang.className;
//     // console.log('comp :'+pilihanComp);
//     // console.log('player :'+pilihanPlayer);
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     // console.log('hasil :'+ hasil);
//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pSemut.className;
//     // console.log('comp :'+pilihanComp);
//     // console.log('player :'+pilihanPlayer);
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     // console.log('hasil :'+ hasil);
//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// ==================================================================
// Versi 1
// var tanya = true;
// while (tanya) {
//     // menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');
//     // menangkap pilihan computer
//     // membangkitkan bilangan random
//     var comp = Math.random();

//     if (comp < 0.34) {
//         comp = 'gajah';
//     } else if (comp >= 0.34 && comp < 0.67) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     // menentukan rules
//     var hasil = '';
//     if (p == comp) {
//         hasil = 'SERI!';
//     } else if (p == 'gajah') {
//         hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
//     } else if (p == 'orang') {
//         hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
//     } else if (p == 'semut') {
//         hasil = (comp == 'orang') ? 'KALAH' : 'MENANG!';
//     } else {
//         hasil = 'memasukkan pilihan yang salah!';
//     }

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');

