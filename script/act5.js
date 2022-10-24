let letnom = "abcdefghijklmnopqrstuvwxyz0123456789";
var comp_nom;
do{
    comp_nom = true;
    let nombre = prompt("Dime tu nombre");
    for(let i=0; i<nombre.length; i++){
        if(letnom.includes(nombre[i]) == false){
            alert("ERROR en el nombre");
            comp_nom = false; } }
}while(comp_nom == false)
var mayus_password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var min_password = "abcdefghijklmnopqrstuvwxyz";
var num_validation_password = "0123456789";
var may=false;
var min=false;
var num=false;
var c=false;
do { let contra = prompt("Dime tu contraseña");
    for(let k=0; k<contra.length; k++){
        if(mayus_password.includes(contra[k]) == true){
            may = true }
        else if(min_password.includes(contra[k]) == true){
            min = true  }
        else if(num_validation_password.includes(contra[k]) == true){
            num = true  }
        else{
            c = true  } }
}while(may==false || min ==false || num==false || c==false)
