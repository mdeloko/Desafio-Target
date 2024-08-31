const str = "Estágio Target";
console.log("String inicial:",str);
const strArr = str.split("");
let aux = [];
strArr.forEach((char)=>{
    aux.unshift(char);
});
const res=aux.join("");
console.log("Resultado (built-in):",res);

console.log("Resultado 2 (Função própria):",invert(strArr).join(""));
function invert(arr){
    let length = arr.length;
    if(length==0){
        return null;
    }
    let aux = [];
    let j = 0;
    for(let i=length-1;i>=0;i--){
        aux[j]=arr[i];
        j++;
    }
    return aux;
}
