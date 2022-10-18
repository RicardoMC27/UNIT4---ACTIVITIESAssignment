var contador = new Array(11).fill(0);

for(let i=1; i<=10000;i++){
        var num = (Math.floor(Math.random()*11)+1);

        contador[num-1]+=1;
        }

for(let i = 1;i<=10;i++){
    
    document.write("Numero " +i+ ": " +contador[i]);
    document.write("<br>");
}
 

