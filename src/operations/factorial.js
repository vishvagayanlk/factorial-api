function factorialCalc(number) {

    let result;
    if (number == 1) {
        return 1;
    }

    result = factorialCalc(number - 1) * number;
    return result;

};

module.exports = factorialCalc;
