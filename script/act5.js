let letnom = "abcdefghijklmnopqrstuvwxyz0123456789";
var comp_nom;
do{
    comp_nom = true;
    let nombre = prompt("Dime tu nombre");
    for(let i=0; i<nombre.length; i++){
        if(letnom.includes(nombre[i]) == false){
            alert("ERROR en el nombre")
            comp_nom = false
        }
    }
}while(comp_nom == false)
let mayus_password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let min_password = "abcdefghijklmnopqrstuvwxyz"
let num_validation_password = "0123456789"
let mayus
let minus
let num
let caracter
do {
    let contrasenya = prompt("Dime tu contraseña")
    mayus = false
    minus = false
    num = false
    caracter = false
    for(let j=0; j<contrasenya.length; j++){
        if(mayus_password.includes(contrasenya[j]) == true){
            mayus = true
        }
        else if(min_password.includes(contrasenya[j]) == true){
            minus = true
        }
        else if(num_validation_password.includes(contrasenya[j]) == true){
            num = true
        }
        else{
            caracter = true
        }
    }
}while(mayus==false || minus==false || num==false || caracter==false)