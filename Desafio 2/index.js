const isInFibo = Number(process.argv[2]) //Defini o número aqui, passando por argumentos. Ex.: npm run desafio2 27.

function isInFibonacci(num){
    if (num < 0){
        return false;
    }

    let a = 0;
    let b = 1;

    if (num === a || num === b){
        return true;
    }

    while (b <= num){
        let next = a + b;
        if (next === num) return true;
        a = b;
        b = next;
    }

    return false;
}
console.log(isInFibonacci(isInFibo));