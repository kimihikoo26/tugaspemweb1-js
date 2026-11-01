function latihanpola4() {

    for (let i = 1; i <= 4; i++) {

        let pola = "";
        for (let j = 1; j <= 4 - i; j++) {
            pola += " ";
        }
        for (let k = 1; k <= i; k++) {
            pola += i;
        }
        console.log(pola);
    }
}