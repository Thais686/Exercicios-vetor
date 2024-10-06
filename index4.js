let num=[]
let i
let intervalo=[]
for(i=0;i<10;i++){

    num[i]= Number (prompt("Digite um valor"))


}

for(i=0;i<2;i++){

    intervalo[i]= Number (prompt("Digite um intervalo de valores"))

   


}

for(i= intervalo[0]; i<=intervalo[1]; i++){


        console.log(`${i}= ${num[i]}`)
}

