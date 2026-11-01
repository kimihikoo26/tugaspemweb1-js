
function latihanpola3() {

    for (let i = 1; i <= 5; i++) {

        let bintang = "";

        for (let j = 1; j <= 8; j++) {

            if (i === 1 || i === 5) {
                bintang += "*";
            } 
            else if (j === 1 || j === 8) {
                bintang += "*";
            } 
            else {
                bintang += " ";
            }

        }
        console.log(bintang);
    }

}
