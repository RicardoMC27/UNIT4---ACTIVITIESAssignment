    var num = new Array(6);

    repe=1;
    for (let i=0;i<49;i++) {
        for(i=0; i<6; i++) {	num[i]=1+Math.floor(Math.random()*49); }
        repe=0;
        for(a=0; a<5; a++) {
            for(b=a+1; b<6; b++){
            if (num[a]>num[b]) {ax=num[a]; num[a]=num[b]; num[b]=ax; }
            if (num[a]==num[b]) repe=1;
            }
        
    }
    document.write(" ",num[0]," - ",num[1]," - ",num[2]," - ",num[3]," - ",num[4]," - ",num[5])

}