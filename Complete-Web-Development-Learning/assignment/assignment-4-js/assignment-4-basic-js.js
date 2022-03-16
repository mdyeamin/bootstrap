
//Problem 1.  sheer to mon convert
function seerToMon(seer) {

    if (seer < 0 || typeof seer == 'string') {
        return 'please Enter the exact measurements'
    }
    else {
        return seer / 40;
    }
}

// output Measurements seer to moon
const seerMeasurements = seerToMon(240)
console.log(seerMeasurements);


// problem 2. 

function totalSales(tshirtQuantity, pantQuantity, shoesQuantity) {

    if (tshirtQuantity < 0 || typeof tshirtQuantity == 'string' || pantQuantity < 0 || typeof pantQuantity == 'string' || shoesQuantity < 0 || typeof shoesQuantity == 'string') {
        return 'pleace enter price quantity'
    }
    const tshirtPrice = 100;
    const pantPrice = 200;
    const shoesPrice = 500;

    const tshirtPriceQuntity = tshirtPrice * tshirtQuantity;
    const pantPriceQuntity = pantPrice * pantQuantity;
    const shoesPriceQuntity = shoesPrice * shoesQuantity;

    const totalMoney = tshirtPriceQuntity + pantPriceQuntity + shoesPriceQuntity;
    return totalMoney;
}

const total = totalSales(1, 2, 1);
console.log(total);


// problem 3

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



// problem 4.
function perfectFriend(friends) {
    let perfectFriendList = friends[0];
    if (typeof friends != 'object') {
        return 'enter the friends object'
    }
    for (const friend of friends) {
        if (friend.length == 5) {
            perfectFriendList = friend;
            return perfectFriendList;
        }
    }
    return perfectFriendList;
}

// Find friends with Five words
const findFrind = perfectFriend(['roky', 'emdad', 'miraj', 'jhankar', 'yeamin', 'saruar']);
console.log(findFrind);
