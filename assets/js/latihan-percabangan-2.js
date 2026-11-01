function latihanpercabangan2(kode) {
    switch (kode) {
        case "A":
            console.log("Admin");
            break;
        case "U":
            console.log("User");
            break;
        case "C":
            console.log("Guest");
            break;
        default:
            console.log("Kode tidak valid");
    }
}
