const favNum = 27;

function add(first, secund) {
    const result = first + secund;

    if (result > 9) {
        console.log('happy');
    }
    else {
        console.log('cranky');
    }

    return result

}

const sum = add(2, 7);