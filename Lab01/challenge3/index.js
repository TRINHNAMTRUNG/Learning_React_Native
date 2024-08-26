const caculateTip = (valueBil) => {
    let tip = valueBil >= 50 && valueBil <= 300 ? valueBil * 0.15 : valueBil * 0.2;
    return {
        valueBil,
        tip: tip,
        totalBil: tip + valueBil
    }
}
let calulate = caculateTip(275);
console.log(`valueBil: ${calulate.valueBil} tip ${calulate.tip} totalBil ${calulate.totalBil}`);