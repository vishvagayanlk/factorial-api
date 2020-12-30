function takeabsolute(number) {

    roundInt = Math.ceil(Number(number)); // round up values
    absInt = Math.abs(roundInt); // take absolute value

    return absInt;
}

module.exports = takeabsolute;
