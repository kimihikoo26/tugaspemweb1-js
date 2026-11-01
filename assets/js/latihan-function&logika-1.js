function latihanfunctionlogika1(batas) {
    let angka = 1;
    while (angka <= batas) {
        if (angka % 15 === 0) {
            console.log("FizzBuzz");
        } else if (angka % 3 === 0) {
            console.log("Fizz");
        } else if (angka % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(angka);
        }
        angka++;
    }
}