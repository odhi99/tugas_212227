const siswa = [
  ["Odi", 90],
  ["Fia", 70],
  ["Satria", 80],
  ["Fano", 50],
  ["Tasya", 85],
];

// Fungsi untuk menentukan status dan nilai huruf berdasarkan nilai
const getStatus = (nilai) => (nilai >= 75 ? "Lulus" : "Tidak Lulus");
const getNilaiHuruf = (nilai) =>
  nilai >= 85 ? "A" : nilai >= 75 ? "B" : nilai >= 60 ? "C" : "D";

// Fungsi untuk menampilkan data siswa ke tabel
function displaySiswa(data) {
  document.getElementById("tableBody").innerHTML = data
    .map(
      ([nama, nilai]) =>
        `<tr>
          <td>${nama}</td>
          <td>${nilai}</td>
          <td>${getStatus(nilai)}</td>
          <td>${getNilaiHuruf(nilai)}</td>
        </tr>`
    )
    .join("");
}

// Menampilkan data dan menginisialisasi DataTables
$(document).ready(function () {
  displaySiswa(siswa);
  $("#siswaTable").DataTable({
    searching: true,
    paging: true,
    ordering: true,
  });
});
