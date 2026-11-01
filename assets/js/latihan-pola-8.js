function latihanpola8() {
    for (let i = 1; i <= 5; i++) {
        let pola = "";
        for (let j = 1; j <= 9; j++) {
            if (j === 6-i || j === 4+i || i === 5) {
                pola += "*";
            } 
            else {
                pola += " ";
            }   
    }
    console.log(pola);
    
 }
}