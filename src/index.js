//destructuring array
const listProduk = ["kaos", "celana", "topi", "sepatu", "sendal"];
const [pertama, kedua, ketiga, ...lainnya] = listProduk;
console.log(pertama, kedua, ketiga, lainnya);

// destructuring object
const siswa = {
  nama: "ade putra",
  kelas: "12",
  jurusan: "IPS",
  Alamat: {
    Desa: "Geliting",
    Kabupaten: "Sikka"
  }
};
const {
  nama,
  jurusan,
  Alamat: { Desa },
  ...dataLainya
} = siswa;
console.log(nama, jurusan, Desa, dataLainya);

// destructuring function
function pengurangan([angka1, angka2]) {
  const pengurangan = angka1 - angka2;
  const pesan = `hasil pengurangan kedua bilangan adalah ${pengurangan}`;
  console.log(pesan);
}
pengurangan([10, 5]);
