var contador = new Array(20).fill(0);

const imprimir = "*";

for(let i = 1; i<=20;i++){
    var num = (Math.floor(Math.random()*50)+1);
    contador[i]=num;
    for(let j = 1; j<=contador[i];j++){
        document.write(imprimir);
    }
    document.write("<br>");
}