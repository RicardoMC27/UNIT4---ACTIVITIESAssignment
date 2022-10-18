//Usuario gema gemoib
let letras = prompt("Dime un texto");

let clave =parseInt(prompt("Dime una clave"));

let espacio = " "
for (let i=0;i<=letras.length;i++){
    let letr = letras.charCodeAt(i) + clave;
    console.log(letr);
    if(letr<97){
        letr+=26;
    }else if(letr>122){
        letr-=26;
    }
    let letrtext = String.fromCharCode(letr);
    console.log(letrtext);
    document.write(letrtext.split(espacio));

        

}

