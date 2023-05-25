// 1) membuat function luas
// 2) diaplikasikan ke hitung luas
function hitungLuas() {
    const sisiLuas = document.getElementById("sisi-luas").value;
    const hasil = document.getElementById("inner-luas");

    hasil.innerHTML = "<p class='result-luas' id='rumus-luas'>L = S x S</p> <p class='result-luas' id='perhitungan-luas'>L = "+ sisiLuas +" x " + sisiLuas + " cm</p> <p class='result-luas' id='hasil-luas'>L = "+ sisiLuas * sisiLuas+" cm</p>";
}

// 1) membuat function keliling
// 2) diaplikasikan ke hitung keliling
function hitungKeliling() {
    const sisiKeliling = document.getElementById("sisi-keliling").value;
    const hasil = document.getElementById("inner-keliling");
    
    hasil.innerHTML = "<p class='result-keliling' id='rumus-keliling'>K = 4 x S</p> <p class='result-keliling' id='perhitungan-keliling'>K = 4 x " + sisiKeliling + " cm</p> <p class='result-keliling' id='hasil-keliling'> K = "+4 * sisiKeliling+" cm</p>";
}
// 1)fungsi ini dibuat terlebih dahulu
// 3) membuat fungsi reset
function resetLuas() {
    const hasil = document.getElementById("inner-luas");
    hasil.innerHTML = "";
}

function resetKeliling() {
    const hasil = document.getElementById("inner-keliling");
    hasil.innerHTML = "";
}
// 3) membuat fungsi reset