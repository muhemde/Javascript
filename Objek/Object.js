var pasien = {
    nama : 'Mulyono',
    tanggalLahir : '30 Februari 1969',
    jenisKelamin : 'Laki-laki',
    alamat : {
        jalan : 'Jl. Jalan',
        nomor : '26',
        blok : '1',
        kelurahan : 'Mekar',
        kecamatan : 'Ngembang',
        kabupaten : 'Berseri',
        provinsi : 'Bersemai'
    },
    pekerjaan : [
        'Penghitung Uang',
        'Penagih Hutang'
    ],
    asuransi : 'Asuransi AXA',
    email : 'pakmoeljoss@gandos.com',
};

/* Key */

console.log(pasien.nama) //hasil : Mulyono

console.log(pasien['alamat']['kecamatan']) //hasil : Ngembang

console.log(pasien.alamat['kabupaten']) //hasil : Berseri

pasien.pekerjaan.forEach(function(item) {
    console.log(`${item} adalah pekerjaan ${pasien.nama}`)
}) //hasil : a. Penghitung Uang adalah Pekerjaan Mulyono
   //        b. Penagih Hutang adalah Pekerjaan Mulyono

console.log(`Bapak ` + this.pasien.nama + ` adalah pasien pengguana ` + this.pasien.asuransi); //hasil: Bapak Mulyono adalah pasien pengguna Asuransi AXA