let suma = 0
let num_introducido = 0
let contador = 0
let media_num = 0
num_introducido = true

while(num_introducido != 0){
    num_introducido = parseInt(prompt("Indica un num_introducido"))
    if(num_introducido == 0 || isNaN(num_introducido)){
        break;
    }
    else{
        contador ++
        suma = suma+num_introducido
        media_num = suma/contador
    }
    if(num_introducido==false){
        break;
    }
}
    document.write(media_num)

