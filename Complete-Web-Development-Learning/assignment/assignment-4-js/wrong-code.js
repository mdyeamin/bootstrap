
function deliveryCost(itemQuantity) {
    let totalCost = 0;
    if (typeof itemQuantity != 'number') {
        return 'Please calculate the amount of delivery'
    }
    const priceFor100Ps = 100;
    const priceFor200Ps = 80;
    const priceForUpTo200ps = 50;

    const totalCostForFirstHundred = 100 * priceFor100Ps;
    const totalCostForSecondHundred = 100 * priceFor200Ps;
    const totalCostForFirstTwoHundred =
        totalCostForFirstHundred + totalCostForSecondHundred;

    if (itemQuantity <= 100) {
        totalCost = itemQuantity * priceFor100Ps;
    } else if (itemQuantity <= 200) {
        const secondDenseCost = (itemQuantity - 100) * priceFor200Ps;
        totalCost = secondDenseCost + totalCostForFirstHundred;
    } else {
        const restDenseCost = (itemQuantity - 200) * priceForUpTo200ps;
        totalCost = restDenseCost + totalCostForFirstTwoHundred;
    }

    return totalCost;
}
// total dress amount quantity 
const totalDressAmountQuantity = deliveryCost(210)
console.log(totalDressAmountQuantity);
