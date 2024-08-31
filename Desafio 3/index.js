const fs = require("fs");
const path = require("path");
const monthlyBilingPath = path.join(__dirname, "monthlyBiling.json");
const monthJsonFile = fs.readFileSync(monthlyBilingPath, "utf-8");
const monthJson = JSON.parse(monthJsonFile);
const argMonth = parseInt(process.argv[2]);
const workedDays  = getMonthWorkedDays(argMonth);
const worstBiling = getMonthWorstBiling(argMonth);
const bestBiling = getMonthBestBiling(argMonth);

function getMonthWorkedDays(month){
    let aux = 0;
    switch (month) {
      case 1:
        for (const day in monthJson.january) {
          if (day !== "total" && monthJson.january[day] !== "0") {
            aux++;
          }
        }
        break;
      case 2:
        for (const day in monthJson.february) {
          if (day !== "total" && monthJson.february[day] !== "0") {
            aux++;
          }
        }
        break;
      case 3:
        for (const day in monthJson.march) {
          if (day !== "total" && monthJson.march[day] !== "0") {
            aux++;
          }
        }
        break;
      case 4:
        for (const day in monthJson.april) {
          if (day !== "total" && monthJson.april[day] !== "0") {
            aux++;
          }
        }
        break;
      case 5:
        for (const day in monthJson.may) {
          if (day !== "total" && monthJson.may[day] !== "0") {
            aux++;
          }
        }
        break;
      case 6:
        for (const day in monthJson.june) {
          if (day !== "total" && monthJson.june[day] !== "0") {
            aux++;
          }
        }
        break;
      case 7:
        for (const day in monthJson.july) {
          if (day !== "total" && monthJson.july[day] !== "0") {
            aux++;
          }
        }
        break;
      case 8:
        for (const day in monthJson.august) {
          if (day !== "total" && monthJson.august[day] !== "0") {
            aux++;
          }
        }
        break;
      case 9:
        for (const day in monthJson.september) {
          if (day !== "total" && monthJson.september[day] !== "0") {
            aux++;
          }
        }
        break;
      case 10:
        for (const day in monthJson.october) {
          if (day !== "total" && monthJson.october[day] !== "0") {
            aux++;
          }
        }
        break;
      case 11:
        for (const day in monthJson.november) {
          if (day !== "total" && monthJson.november[day] !== "0") {
            aux++;
          }
        }
        break;
      case 12:
        for (const day in monthJson.december) {
          if (day !== "total" && monthJson.december[day] !== "0") {
            aux++;
          }
        }
        break;
      default:
        console.log("Mes inválido pra buscar quantidade de dias trabalhados.")
        break;
    }
    return aux;
}
function getMonthWorstBiling(month){
    let worstBiling = Infinity;
    switch (month) {
      case 1:
        for (const day in monthJson.january) {
          if (day !== "total" && monthJson.january[day] !== "0") {
            const value = parseInt(monthJson.january[day]);
            if(value<worstBiling){
                worstBiling = monthJson.january[day];
            }
          }
        }
        break;
      case 2:
        for (const day in monthJson.february) {
          if (day !== "total" && monthJson.february[day] !== "0") {
            const value = parseInt(monthJson.february[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.february[day];
            }
          }
        }
        break;
      case 3:
        for (const day in monthJson.march) {
          if (day !== "total" && monthJson.march[day] !== "0") {
            const value = parseInt(monthJson.march[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.march[day];
            }
          }
        }
        break;
      case 4:
        for (const day in monthJson.april) {
          if (day !== "total" && monthJson.april[day] !== "0") {
            const value = parseInt(monthJson.april[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.april[day];
            }
          }
        }
        break;
      case 5:
        for (const day in monthJson.may) {
          if (day !== "total" && monthJson.may[day] !== "0") {
            const value = parseInt(monthJson.may[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.may[day];
            }
          }
        }
        break;
      case 6:
        for (const day in monthJson.june) {
          if (day !== "total" && monthJson.june[day] !== "0") {
            const value = parseInt(monthJson.june[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.june[day];
            }
          }
        }
        break;
      case 7:
        for (const day in monthJson.july) {
          if (day !== "total" && monthJson.july[day] !== "0") {
            const value = parseInt(monthJson.july[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.july[day];
            }
          }
        }
        break;
      case 8:
        for (const day in monthJson.august) {
          if (day !== "total" && monthJson.august[day] !== "0") {
            const value = parseInt(monthJson.august[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.august[day];
            }
          }
        }
        break;
      case 9:
        for (const day in monthJson.september) {
          if (day !== "total" && monthJson.september[day] !== "0") {
            const value = parseInt(monthJson.september[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.september[day];
            }
          }
        }
        break;
      case 10:
        for (const day in monthJson.october) {
          if (day !== "total" && monthJson.october[day] !== "0") {
            const value = parseInt(monthJson.october[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.october[day];
            }
          }
        }
        break;
      case 11:
        for (const day in monthJson.november) {
          if (day !== "total" && monthJson.november[day] !== "0") {
            const value = parseInt(monthJson.november[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.november[day];
            }
          }
        }
        break;
      case 12:
        for (const day in monthJson.december) {
          if (day !== "total" && monthJson.december[day] !== "0") {
            const value = parseInt(monthJson.december[day]);
            if (value < worstBiling) {
              worstBiling = monthJson.december[day];
            }
          }
        }
        break;
      default:
        console.log("Mês inválido para menor faturamento diario")
        break;
    }
    return worstBiling;
}
function getMonthBestBiling(month) {
  let bestBiling = 0;
  switch (month) {
    case 1:
      for (const day in monthJson.january) {
        if (day !== "total" && monthJson.january[day] !== "0") {
          const value = parseInt(monthJson.january[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.january[day];
          }
        }
      }
      break;
    case 2:
      for (const day in monthJson.february) {
        if (day !== "total" && monthJson.february[day] !== "0") {
          const value = parseInt(monthJson.february[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.february[day];
          }
        }
      }
      break;
    case 3:
      for (const day in monthJson.march) {
        if (day !== "total" && monthJson.march[day] !== "0") {
          const value = parseInt(monthJson.march[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.march[day];
          }
        }
      }
      break;
    case 4:
      for (const day in monthJson.april) {
        if (day !== "total" && monthJson.april[day] !== "0") {
          const value = parseInt(monthJson.april[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.april[day];
          }
        }
      }
      break;
    case 5:
      for (const day in monthJson.may) {
        if (day !== "total" && monthJson.may[day] !== "0") {
          const value = parseInt(monthJson.may[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.may[day];
          }
        }
      }
      break;
    case 6:
      for (const day in monthJson.june) {
        if (day !== "total" && monthJson.june[day] !== "0") {
          const value = parseInt(monthJson.june[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.june[day];
          }
        }
      }
      break;
    case 7:
      for (const day in monthJson.july) {
        if (day !== "total" && monthJson.july[day] !== "0") {
          const value = parseInt(monthJson.july[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.july[day];
          }
        }
      }
      break;
    case 8:
      for (const day in monthJson.august) {
        if (day !== "total" && monthJson.august[day] !== "0") {
          const value = parseInt(monthJson.august[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.august[day];
          }
        }
      }
      break;
    case 9:
      for (const day in monthJson.september) {
        if (day !== "total" && monthJson.september[day] !== "0") {
          const value = parseInt(monthJson.september[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.september[day];
          }
        }
      }
      break;
    case 10:
      for (const day in monthJson.october) {
        if (day !== "total" && monthJson.october[day] !== "0") {
          const value = parseInt(monthJson.october[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.october[day];
          }
        }
      }
      break;
    case 11:
      for (const day in monthJson.november) {
        if (day !== "total" && monthJson.november[day] !== "0") {
          const value = parseInt(monthJson.november[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.november[day];
          }
        }
      }
      break;
    case 12:
      for (const day in monthJson.december) {
        if (day !== "total" && monthJson.december[day] !== "0") {
          const value = parseInt(monthJson.december[day]);
          if (value > bestBiling) {
            bestBiling = monthJson.december[day];
          }
        }
      }
      break;
    default:
      console.log("Mês inválido para menor faturamento diario");
      break;
  }
  return bestBiling;
}
function getDaysBetterThanAverage(month){
    let days = 0;
    let avg = 0;
    switch (month) {
      case 1:
        avg = parseInt(monthJson.january.total) / getMonthWorkedDays(1);
        for (const day in monthJson.january) {
          if (day !== "total" && monthJson.january[day] !== "0") {
            if (parseInt(monthJson.january[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 2:
        avg = parseInt(monthJson.february.total) / getMonthWorkedDays(1);
        for (const day in monthJson.february) {
          if (day !== "total" && monthJson.february[day] !== "0") {
            if (parseInt(monthJson.february[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 3:
        avg = parseInt(monthJson.march.total) / getMonthWorkedDays(1);
        for (const day in monthJson.march) {
          if (day !== "total" && monthJson.march[day] !== "0") {
            if (parseInt(monthJson.march[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 4:
        avg = parseInt(monthJson.april.total) / getMonthWorkedDays(1);
        for (const day in monthJson.april) {
          if (day !== "total" && monthJson.april[day] !== "0") {
            if (parseInt(monthJson.april[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 5:
        avg = parseInt(monthJson.may.total) / getMonthWorkedDays(1);
        for (const day in monthJson.may) {
          if (day !== "total" && monthJson.may[day] !== "0") {
            if (parseInt(monthJson.may[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 6:
        avg = parseInt(monthJson.june.total) / getMonthWorkedDays(1);
        for (const day in monthJson.june) {
          if (day !== "total" && monthJson.june[day] !== "0") {
            if (parseInt(monthJson.june[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 7:
        avg = parseInt(monthJson.july.total) / getMonthWorkedDays(1);
        for (const day in monthJson.july) {
          if (day !== "total" && monthJson.july[day] !== "0") {
            if (parseInt(monthJson.july[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 8:
        avg = parseInt(monthJson.august.total) / getMonthWorkedDays(1);
        for (const day in monthJson.august) {
          if (day !== "total" && monthJson.august[day] !== "0") {
            if (parseInt(monthJson.august[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 9:
        avg = parseInt(monthJson.september.total) / getMonthWorkedDays(1);
        for (const day in monthJson.september) {
          if (day !== "total" && monthJson.september[day] !== "0") {
            if (parseInt(monthJson.september[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 10:
        avg = parseInt(monthJson.october.total) / getMonthWorkedDays(1);
        for (const day in monthJson.october) {
          if (day !== "total" && monthJson.october[day] !== "0") {
            if (parseInt(monthJson.october[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 11:
        avg = parseInt(monthJson.november.total) / getMonthWorkedDays(1);
        for (const day in monthJson.november) {
          if (day !== "total" && monthJson.november[day] !== "0") {
            if (parseInt(monthJson.november[day]) > avg) {
              days++;
            }
          }
        }
        break;
      case 12:
        avg = parseInt(monthJson.december.total) / getMonthWorkedDays(1);
        for (const day in monthJson.december) {
          if (day !== "total" && monthJson.december[day] !== "0") {
            if (parseInt(monthJson.december[day]) > avg) {
              days++;
            }
          }
        }
        break;
    }
    return days;
}
console.log("Mês",argMonth,"\nDias Trabalhados:",workedDays,"\nMenor Faturamento:",worstBiling,"\nMaior Faturamento:",bestBiling);
console.log(getDaysBetterThanAverage(argMonth));
