function main() {
    var sayi, i, toplam, j, asalmi, dizi, eleman;
    
    dizi = 0;
    asalmi = 0;
    toplam = 1;
    sayi = window.prompt('Enter a value for sayi');
    for (i = 2; i <= sayi - 1; i++) {
        for (j = 2; j <= sayi - 1; j++) {
            if (i % j == 0) {
                asalmi = asalmi + 1;
            }
        }
        if (asalmi <= 1) {
            dizi = dizi + 1;
        }
        asalmi = 0;
    }
    var asallar = createArray(dizi);
    
    asalmi = 0;
    eleman = 0;
    for (i = 2; i <= sayi - 1; i++) {
        for (j = 2; j <= sayi - 1; j++) {
            if (i % j == 0) {
                asalmi = asalmi + 1;
            }
        }
        if (asalmi <= 1) {
            asallar[eleman] = i;
            eleman = eleman + 1;
        }
        asalmi = 0;
    }
    for (i = 0; i <= dizi - 1; i++) {
        if (sayi % asallar[i] == 0) {
            toplam = toplam + asallar[i];
        }
    }
    if (toplam == sayi) {
        window.alert("Girilen " + sayi + " değeri Jax sayısıdır.");
    } else {
        window.alert("Girilen " + sayi + " değeri Jax sayısı değildir.");
    }
}
