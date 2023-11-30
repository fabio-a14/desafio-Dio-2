
function ranking(vt, dr) {
  let resultado = vt - dr;
  return resultado;
}

function total () {
  let resultRank = ranking(290, 99)
  let nivel = ""
  if (resultRank <= 10) {
    nivel = "Ferro"
  } else if (resultRank <= 20) {
    nivel = "Bronze"
  } else if (resultRank <= 50) {
    nivel = "Prata"
  } else if (resultRank <= 80) {
    nivel = "Ouro"
  } else if (resultRank <= 90) {
    nivel = "Diamante"
  } else if (resultRank <= 100) {
    nivel = "Lendário"
  } else if (resultRank >= 101) {
    nivel = "Imortal"
  }
  return `O Herói tem de saldo de ${resultRank} e está no nível de ${nivel}`
}

console.log(total())
