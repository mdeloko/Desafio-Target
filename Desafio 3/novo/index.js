const fs = require("fs");
const path = require("path");
const monthlyBilingPath = path.join(__dirname, "dados.json");
const monthJsonFile = fs.readFileSync(monthlyBilingPath, "utf-8");
const monthJson = JSON.parse(monthJsonFile);

function getMonthWorkedDays(){
    let aux = 0;
    for (const day in monthJson) {
      if (monthJson[day].valor !== 0) {
        aux++;
      }
    }
    return aux;
}

function getMonthWorstBiling(){
    let worstBiling = Infinity;
    for (const day in monthJson) {
        if (monthJson[day].valor !== 0 && monthJson[day].valor < worstBiling) {
          worstBiling = monthJson[day].valor;
        }
    }
    return worstBiling;
}

function getMonthBestBiling() {
    let bestBiling = 0;
    for (const day in monthJson) {
        if (monthJson[day].valor !== 0 && monthJson[day].valor > bestBiling) {
            bestBiling = monthJson[day].valor;
        }
    }
    return bestBiling;
}

function getTotalMonthBiling(){
    let total = 0;
    for(const day in monthJson){
        if(monthJson[day].valor !== 0){
            total += monthJson[day].valor;
        }
    }
    return total;
}

function getDaysBetterThanAverage(){
    let days = 0;
    let avg  = getTotalMonthBiling() / getMonthWorkedDays();
    for (const day in monthJson) {
        if (monthJson[day].valor !== 0 && monthJson[day].valor > avg) {
          days++;
        }
    }
    return days;
}

console.log("Dias Trabalhados:",getMonthWorkedDays(),"\nMenor Faturamento:",getMonthWorstBiling(),"\nMaior Faturamento:",getMonthBestBiling());
console.log("Qtd. dias melhores que a média:", getDaysBetterThanAverage());