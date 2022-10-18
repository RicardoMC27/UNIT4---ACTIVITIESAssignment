let mensaje = prompt("Mensaje: ");
let clave = prompt("Clave: ");
let j =  0;
let men = "";

for(let i=0;i<=mensaje.length;i++){
    
   if (j >= clave.length) j = 0;
   
   men += String.fromCharCode(mensaje.charCodeAt(i) + parseInt(clave[j]));
   console.log(clave[j] + " " + mensaje.charCodeAt(i));
    j++;
}
document.write(men);

