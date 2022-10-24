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
let mayus_password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let min_password = "abcdefghijklmnopqrstuvwxyz";
let num_validation_password = "0123456789";
let mayus;
let minus;
let num;
let caracter;
do {
    let contra = prompt("Dime tu contraseña");
    mayus = false;
    minus = false;
    num = false;
    c = false;
    for(let k=0; k<contra.length; k++){
        if(mayus_password.includes(contra[k]) == true){
            mayus = true
        }
        else if(min_password.includes(contra[k]) == true){
            minus = true
        }
        else if(num_validation_password.includes(contra[k]) == true){
            num = true
        }
        else{
            c = true
        }
    }
}while(mayus==false || minus==false || num==false || c==false)
