// Heading 1
namaheading = 'Kalkulator';
document.getElementById('heading1').innerHTML = namaheading;

// onfocus
function perubahan1() {
  let frm = document.getElementById('formulir');
  frm.a1.value = '';
}
function perubahan2() {
  let frm = document.getElementById('formulir');
  frm.a2.value = '';
}

// tambah
function tambah() {
  let frm = document.getElementById('formulir');
  let angka1 = frm.a1.value;
  let angka2 = frm.a2.value;

  if (isNaN(angka1) || angka1 == '') {
    alert('harap isi data berupa angka');
  } else if (isNaN(angka2) || angka2 == '') {
    alert('harap isi data berupa angka');
  } else {
    let jumlah = angka1 + angka2;
    frm.hasil.value = jumlah;
  }
}
// kurang
function kurang() {
  let frm = document.getElementById('formulir');
  let angka1 = frm.a1.value;
  let angka2 = frm.a2.value;

  if (isNaN(angka1) || angka1 == '') {
    alert('harap isi data berupa angka');
  } else if (isNaN(angka2) || angka2 == '') {
    alert('harap isi data berupa angka');
  } else {
    let jumlah = angka1 - angka2;
    frm.hasil.value = jumlah;
  }
}
// kali
function kali() {
  let frm = document.getElementById('formulir');
  let angka1 = frm.a1.value;
  let angka2 = frm.a2.value;

  if (isNaN(angka1) || angka1 == '') {
    alert('harap isi data berupa angka');
  } else if (isNaN(angka2) || angka2 == '') {
    alert('harap isi data berupa angka');
  } else {
    let jumlah = angka1 * angka2;
    frm.hasil.value = jumlah;
  }
}
// bagi
function bagi() {
  let frm = document.getElementById('formulir');
  let angka1 = frm.a1.value;
  let angka2 = frm.a2.value;

  if (isNaN(angka1) || angka1 == '') {
    alert('harap isi data berupa angka');
  } else if (isNaN(angka2) || angka2 == '') {
    alert('harap isi data berupa angka');
  } else {
    let jumlah = angka1 / angka2;
    frm.hasil.value = jumlah;
  }
}
// pangkat
function pangkat() {
  let frm = document.getElementById('formulir');
  let angka1 = frm.a1.value;
  let angka2 = frm.a2.value;

  if (isNaN(angka1) || angka1 == '') {
    alert('harap isi data berupa angka');
  } else if (isNaN(angka2) || angka2 == '') {
    alert('harap isi data berupa angka');
  } else {
    // sqrt()
    let jumlah = Math.sqrt(angka1 / angka2);
    frm.hasil.value = jumlah;
  }
}

// Hilang angka saat tombol batal di klik
function hilangall() {
  let frm = document.getElementById('formulir');
  frm.a1.value = '';
  frm.a2.value = '';
}
