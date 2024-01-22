function levelRanks(vitorias, derrotas) {
    
    const total = vitorias - derrotas;

    
    let level ;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        level = "Bronze";
    } else if (vitorias <= 50) {
        level = "Prata";
    } else if (vitorias <= 80) {
        level = "Ouro";
    } else if (vitorias <= 90) {
        level = "Diamante";
    } else if (vitorias <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    return `O Herói tem um saldo de ${total} está no nível de ${level}`;
}
const resultadoFinal = levelRanks(20, 50);
console.log(resultadoFinal);