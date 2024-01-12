function hitungLuas() {
        // Ambil nilai panjang sisi dari formulir
        var sisi = document.getElementById("sisi").value;

        // Konversi nilai sisi ke dalam bentuk angka
        sisi = parseFloat(sisi);

        // Hitung luas persegi
        var luas = sisi * sisi;

        // Tampilkan hasil luas pada elemen dengan id "hasilLuas"
        document.getElementById("hasilLuas").innerHTML =
          "Luas Persegi: " + luas;
      }