document.getElementById('okBTN').onclick = function () {

    var nama = document.getElementById('nama').value.trim();
    if (nama === "") {
        nama = "(Nama Harus Di Isi)";
    }

    var kelas = document.getElementById('kelas').value.trim();
    if (kelas === "") {
        kelas = "(Kelas Harus Di Isi)";
    }

    var umur = "";
    var cekUmur = document.getElementsByName('umur');
    for (var i = 0; i < cekUmur.length; i++) {
        if (cekUmur[i].checked) {
            umur += cekUmur[i].value + " ";
        }
    }
    if (umur === "") {
        umur = "(Pilih Umur)";
    }

    var kelamin = "";
    var radios = document.getElementsByName('kelamin');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            kelamin = radios[i].value;
            break;
        }
    }
    if (kelamin === "") {
        kelamin = "(Pilih Kelamin)";
    }

    var tingkatan = "";
    var radioTingkat = document.getElementsByName('tingkatan');
    for (var i = 0; i < radioTingkat.length; i++) {
        if (radioTingkat[i].checked) {
            tingkatan = radioTingkat[i].value;
            break;
        }
    }
    if (tingkatan === "") {
        tingkatan = "(Pilih Tingkatan)";
    }

    var hasilText =
        "Nama: " + nama + "\n" +
        "Kelas: " + kelas + "\n" +
        "Umur: " + umur + "\n" +
        "Kelamin: " + kelamin + "\n" +
        "Tingkatan: " + tingkatan;

    document.getElementById('hasil').innerText = hasilText;
};


document.getElementById('clearBTN').onclick = function () {
    document.getElementById('formPendaftaran').reset();
    document.getElementById('hasil').innerText = "";
};

