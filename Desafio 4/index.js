const SP = 67836.43
const RJ = 36678.66
const MG = 29229.88
const ES = 27165.48
const Outros = 19849.53

const total = SP + RJ + MG + ES + Outros;

function percentual(parcela,total){
    return Number(parcela/total*100).toFixed(2);
}

console.log("SP:",percentual(SP,total)+"%");
console.log("RJ:", percentual(RJ, total) + "%");
console.log("MG:", percentual(MG, total) + "%");
console.log("ES:", percentual(ES, total) + "%");
console.log("Outros:", percentual(Outros, total) + "%");
