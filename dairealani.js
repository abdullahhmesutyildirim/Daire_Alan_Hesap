//Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
//Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek 
//alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) 
//şeklinde olmalıdır.

const pi = 3.14;
const alanhesap = (r) => {
    const sonuc = pi*(r*r);
    console.log(`yarıçapı  ${r} olan dairenin alanı = ${sonuc}`);
}

const parametre = process.argv.slice(2)[0];

alanhesap(parametre);