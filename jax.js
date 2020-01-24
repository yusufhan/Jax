function main() {
    var a, toplam;
    
    toplam = 0;
    a = window.prompt('Enter a value for a');
    if (a % 2 == 0) {
        toplam = toplam + 2;
    }
    if (a % 3 == 0) {
        toplam = toplam + 3;
    }
    if (a % 5 == 0) {
        toplam = toplam + 5;
    }
    if (a % 7 == 0) {
        toplam = toplam + 7;
    }
    if (toplam == a) {
        window.alert(a + " is a Jax Number.");
    } else {
        window.alert(a + "isn't a Jax Number.");
    }
}
