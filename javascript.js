// Soal nomor 1
let divisi = "HR";
if (divisi == "HR"){
    console.log("Divisi : " +divisi+ " | Tugas : Rekrutmen calon pegawai baru");
}

// Soal nomor 2
let point1 = 10;
let point2 = 10;
if (point1 == point2){
    console.log("Point 1 sama dengan Point 2");
} else if(point1 > point2) {
    console.log("Point 1 lebih besar dari Point 2");
} else if(point1 < point2) {
    console.log("Point 1 lebih kecil dari Point 2");
}    
else {
    console.log("Nilai dari point1 dan point2 tidak sama");
}


// Soal nomor 3
let angka = 3;
switch (angka) {

    case 1: { console.log("Hari ini adalah hari Minggu");
            break;
            }
    case 2: { console.log("Hari ini adalah hari Senin");
            break;
            }
    case 3: { console.log("Hari ini adalah hari Selasa");
            break;
            }
    case 4: { console.log("Hari ini adalah hari Rabu");
            break;
            }
    case 5: { console.log("Hari ini adalah hari Kamis");
            break;
            }
    case 6: { console.log("Hari ini adalah hari Jum'at");
            break;
            }
    case 7: { console.log("Hari ini adalah hari Sabtu");
            break;
            }
    default: {
            console.log("kiamat mas");
    }
};

// Soal nomor 4
let tombol = "right" ;
switch (tombol) {

    case "up": { console.log("Karakter bergerak ke atas");
            break;
            }
    case "right": { console.log("Karakter bergerak ke kanan");
            break;
            }
    case "down": { console.log("Karakter bergerak ke bawah");
            break;
            }
    case "left": { console.log("Karakter bergerak ke kiri");
            break;
            }
    default: {
            console.log("Karakter tidak bergerak");
    }
}